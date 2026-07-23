import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

// Get the authenticated user's profile
router.get('/profile', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    let profile = await prisma.studentProfile.findUnique({
      where: { userId }
    });

    if (!profile) {
      // If they don't have a profile yet, return an empty one
      profile = await prisma.studentProfile.create({
        data: { userId }
      });
    }

    res.json({ profile });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update the authenticated user's profile
router.put('/profile', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const {
      phone,
      state,
      country,
      education,
      githubUrl,
      linkedinUrl,
      portfolioUrl,
      otherLinks,
      skills
    } = req.body;

    const updatedProfile = await prisma.studentProfile.upsert({
      where: { userId },
      create: {
        userId,
        phone,
        state,
        country,
        education,
        githubUrl,
        linkedinUrl,
        portfolioUrl,
        otherLinks: otherLinks || [],
        skills: skills || []
      },
      update: {
        phone,
        state,
        country,
        education,
        githubUrl,
        linkedinUrl,
        portfolioUrl,
        otherLinks: otherLinks || [],
        skills: skills || []
      }
    });

    res.json({ message: 'Profile updated successfully', profile: updatedProfile });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
