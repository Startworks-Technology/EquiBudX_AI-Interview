import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma';
import { authenticateToken, requireRole } from '../middleware/auth';

const router = express.Router();

/**
 * GET /api/admin/stats
 * Overview stats for Super Admin dashboard.
 */
router.get('/stats', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const totalStudents = await prisma.user.count({ where: { role: 'student' } });
    const totalCollegeAdmins = await prisma.user.count({ where: { role: 'college' } });
    const totalColleges = await prisma.college.count();

    const scorecardsCount = await prisma.scorecard.count();
    const interviewsCount = await prisma.interviewRecord.count();
    const totalAssessments = scorecardsCount + interviewsCount;

    const recentColleges = await prisma.college.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: {
            users: {
              where: { role: 'student' }
            }
          }
        }
      }
    });

    const recentStudents = await prisma.user.findMany({
      where: { role: 'student' },
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        isVerified: true,
        college: { select: { name: true } }
      }
    });

    res.json({
      totalStudents,
      totalColleges: totalColleges || totalCollegeAdmins,
      totalAssessments,
      recentColleges,
      recentStudents
    });
  } catch (error) {
    console.error('Admin stats error:', error);
    res.status(500).json({ error: 'Failed to fetch admin stats' });
  }
});

/**
 * GET /api/admin/students
 * List all students across the system.
 */
router.get('/students', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const students = await prisma.user.findMany({
      where: { role: 'student' },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        isVerified: true,
        college: {
          select: { id: true, name: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(students);
  } catch (error) {
    console.error('Admin fetch students error:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

/**
 * DELETE /api/admin/students/:studentId
 * Delete a student user from the platform.
 */
router.delete('/students/:studentId', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const { studentId } = req.params;
    await prisma.user.delete({ where: { id: studentId } });
    res.json({ message: 'Student account deleted successfully' });
  } catch (error) {
    console.error('Admin delete student error:', error);
    res.status(500).json({ error: 'Failed to delete student' });
  }
});

/**
 * POST /api/admin/students/:studentId/reset-password
 * Reset student password to default Password@123.
 */
router.post('/students/:studentId/reset-password', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const { studentId } = req.params;
    const defaultPassword = 'Password@123';
    const passwordHash = await bcrypt.hash(defaultPassword, 10);

    await prisma.user.update({
      where: { id: studentId },
      data: { passwordHash }
    });

    res.json({ message: 'Password reset to default', defaultPassword });
  } catch (error) {
    console.error('Admin reset password error:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
});

/**
 * GET /api/admin/colleges
 * List all registered colleges and college admin accounts.
 */
router.get('/colleges', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const colleges = await prisma.college.findMany({
      include: {
        users: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
            isVerified: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Also fetch college admins that might not have a College record linked yet
    const standaloneCollegeAdmins = await prisma.user.findMany({
      where: { role: 'college', collegeId: null },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        isVerified: true
      }
    });

    res.json({
      colleges,
      standaloneAdmins: standaloneCollegeAdmins
    });
  } catch (error) {
    console.error('Admin fetch colleges error:', error);
    res.status(500).json({ error: 'Failed to fetch colleges' });
  }
});

/**
 * POST /api/admin/colleges
 * Add a new College & College Admin user account.
 */
router.post('/colleges', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const { name, adminEmail, adminFirstName, adminLastName, password } = req.body;

    if (!name || !adminEmail) {
      return res.status(400).json({ error: 'College name and Admin Email are required.' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email: adminEmail } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists.' });
    }

    const defaultPassword = password || 'Password@123';
    const passwordHash = await bcrypt.hash(defaultPassword, 10);

    const college = await prisma.college.create({
      data: { name }
    });

    const user = await prisma.user.create({
      data: {
        email: adminEmail,
        firstName: adminFirstName || name,
        lastName: adminLastName || '',
        passwordHash,
        role: 'college',
        collegeId: college.id,
        isVerified: true
      }
    });

    res.status(201).json({
      message: 'College created successfully',
      college,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        role: user.role
      },
      defaultPassword
    });
  } catch (error) {
    console.error('Admin create college error:', error);
    res.status(500).json({ error: 'Failed to create college' });
  }
});

/**
 * GET /api/admin/bootcamps
 * List all bootcamp applicants and their status.
 */
router.get('/bootcamps', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const apps = await prisma.bootcampApplication.findMany({
      include: {
        user: { select: { firstName: true, lastName: true, email: true } }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(apps);
  } catch (error) {
    console.error('Admin fetch bootcamps error:', error);
    res.status(500).json({ error: 'Failed to fetch bootcamp applications' });
  }
});

/**
 * PATCH /api/admin/bootcamps/:id/status
 * Manually update a bootcamp application status.
 */
router.patch('/bootcamps/:id/status', authenticateToken, requireRole(['admin']), async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // PENDING_TEST, UNDER_REVIEW, SELECTED, WAITLISTED, REJECTED
    
    const updated = await prisma.bootcampApplication.update({
      where: { id },
      data: { status }
    });
    
    res.json({ success: true, application: updated });
  } catch (error) {
    console.error('Admin update bootcamp error:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

export default router;
