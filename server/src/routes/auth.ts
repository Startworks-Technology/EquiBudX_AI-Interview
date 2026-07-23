import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Resend } from 'resend';
import prisma from '../prisma';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-mvp';
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_izhbow88_DXZBt56rHoDtA9vTR62Y5sKX';
const FROM_EMAIL = process.env.FROM_EMAIL || 'MockMate Auth <onboarding@resend.dev>';
const resend = new Resend(RESEND_API_KEY);

// Helper to generate a 6-digit code
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// 1. Register - Creates unverified user and sends OTP
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    
    // If the user exists and is already verified
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userRole = role || 'student';
    
    const otpCode = generateOTP();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 mins from now

    // Upsert so if they try to register again before verifying, we just update the OTP
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        passwordHash,
        firstName,
        lastName,
        role: userRole,
        verificationCode: otpCode,
        verificationCodeExpires: expiresAt,
        isVerified: false
      },
      create: {
        email,
        firstName,
        lastName,
        passwordHash,
        role: userRole,
        verificationCode: otpCode,
        verificationCodeExpires: expiresAt,
        isVerified: false
      },
    });

    // Send email using Resend
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email, // Note: must be verified email on Resend dev account
      subject: 'Verify your MockMate Account',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; text-align: center;">
          <h2 style="color: #0f172a;">Welcome to MockMate, ${firstName}!</h2>
          <p style="color: #475569; font-size: 16px;">Please use the following 6-digit code to verify your account.</p>
          <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 12px; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #3b82f6;">
            ${otpCode}
          </div>
          <p style="color: #94a3b8; font-size: 14px;">This code expires in 15 minutes.</p>
        </div>
      `
    });

    res.status(201).json({
      message: 'Verification code sent to email',
      requireVerification: true,
      email: user.email
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to register user.' });
  }
});

// 2. Verify Email - Checks OTP and returns JWT
router.post('/verify-email', async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (user.isVerified) {
      return res.status(400).json({ error: 'User is already verified.' });
    }

    if (user.verificationCode !== code) {
      return res.status(400).json({ error: 'Invalid verification code.' });
    }

    if (!user.verificationCodeExpires || new Date() > user.verificationCodeExpires) {
      return res.status(400).json({ error: 'Verification code has expired. Please request a new one.' });
    }

    // Mark as verified and clear code
    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verificationCode: null,
        verificationCodeExpires: null
      }
    });

    // Issue JWT
    const token = jwt.sign({ id: user.id, role: user.role, collegeId: user.collegeId }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({
      token,
      user: { id: user.id, email: user.email, firstName: user.firstName, role: user.role }
    });

  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Failed to verify email.' });
  }
});

// 3. Resend OTP
router.post('/resend-otp', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    
    if (user.isVerified) {
      return res.status(400).json({ error: 'User is already verified.' });
    }

    const otpCode = generateOTP();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: {
        verificationCode: otpCode,
        verificationCodeExpires: expiresAt
      }
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Your new verification code',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; text-align: center;">
          <h2 style="color: #0f172a;">New Verification Code</h2>
          <p style="color: #475569; font-size: 16px;">Here is your new 6-digit code.</p>
          <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 12px; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #3b82f6;">
            ${otpCode}
          </div>
          <p style="color: #94a3b8; font-size: 14px;">This code expires in 15 minutes.</p>
        </div>
      `
    });

    res.json({ message: 'New code sent successfully.' });
  } catch (error) {
    console.error('Resend OTP error:', error);
    res.status(500).json({ error: 'Failed to resend code.' });
  }
});

// 4. Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }

    if (!user.isVerified) {
      // If valid password but not verified, send them an OTP again automatically
      const otpCode = generateOTP();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
      
      await prisma.user.update({
        where: { email },
        data: { verificationCode: otpCode, verificationCodeExpires: expiresAt }
      });
      
      await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: 'Verify your MockMate Account',
        html: `
          <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; text-align: center;">
            <h2 style="color: #0f172a;">Welcome back, ${user.firstName}!</h2>
            <p style="color: #475569; font-size: 16px;">Please use this code to verify your account.</p>
            <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 12px; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #3b82f6;">
              ${otpCode}
            </div>
            <p style="color: #94a3b8; font-size: 14px;">This code expires in 15 minutes.</p>
          </div>
        `
      });

      return res.status(403).json({ 
        error: 'Please verify your email.',
        requireVerification: true,
        email: user.email
      });
    }

    const token = jwt.sign({ id: user.id, role: user.role, collegeId: user.collegeId }, JWT_SECRET, { expiresIn: '7d' });
    
    res.json({
      token,
      user: { id: user.id, email: user.email, firstName: user.firstName, role: user.role }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login.' });
  }
});

// 5. Get Current User (Demonstrates Middleware)
router.get('/me', authenticateToken, async (req: AuthRequest, res) => {
  try {
    // req.user is guaranteed to exist here because of the middleware
    const user = await prisma.user.findUnique({ 
      where: { id: req.user!.id },
      select: { id: true, email: true, firstName: true, lastName: true, role: true, isVerified: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Fetch me error:', error);
    res.status(500).json({ error: 'Failed to fetch user data.' });
  }
});

// 6. Forgot Password - Sends OTP
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    // We don't want to reveal if an email exists for security reasons
    if (!user) {
      return res.json({ message: 'If an account exists, a recovery code has been sent.' });
    }

    const otpCode = generateOTP();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordCode: otpCode,
        resetPasswordExpires: expiresAt
      }
    });

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Reset your MockMate Password',
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; text-align: center;">
          <h2 style="color: #0f172a;">Password Reset Request</h2>
          <p style="color: #475569; font-size: 16px;">We received a request to reset your password. Use the code below to set a new password.</p>
          <div style="margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 12px; font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #3b82f6;">
            ${otpCode}
          </div>
          <p style="color: #94a3b8; font-size: 14px;">This code expires in 15 minutes. If you didn't request this, you can safely ignore this email.</p>
        </div>
      `
    });

    res.json({ message: 'If an account exists, a recovery code has been sent.' });
  } catch (error) {
    console.error('Forgot password error:', error);
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

// 7. Reset Password - Verifies OTP and updates password
router.post('/reset-password', async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user || user.resetPasswordCode !== code) {
      return res.status(400).json({ error: 'Invalid or expired reset code.' });
    }

    if (!user.resetPasswordExpires || new Date() > user.resetPasswordExpires) {
      return res.status(400).json({ error: 'Reset code has expired. Please request a new one.' });
    }

    // Hash new password
    const passwordHash = await bcrypt.hash(newPassword, 10);

    // Update user
    await prisma.user.update({
      where: { email },
      data: {
        passwordHash,
        resetPasswordCode: null,
        resetPasswordExpires: null
      }
    });

    res.json({ message: 'Password has been successfully reset.' });
  } catch (error) {
    console.error('Reset password error:', error);
    res.status(500).json({ error: 'Failed to reset password.' });
  }
});

// 8. Change Password (Authenticated)
router.post('/change-password', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    // req.user exists because of authenticateToken
    const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
    if (!user || !user.passwordHash) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      return res.status(401).json({ error: 'Incorrect current password.' });
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);
    
    await prisma.user.update({
      where: { id: user.id },
      data: { passwordHash }
    });

    res.json({ message: 'Password successfully changed.' });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Failed to change password.' });
  }
});

export default router;
