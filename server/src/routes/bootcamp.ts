import express from 'express';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import prisma from '../prisma';

const router = express.Router();

// GET /api/bootcamp/status
// Fetch the current user's active bootcamp application
router.get('/status', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const application = await prisma.bootcampApplication.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!application) {
      return res.json({ hasApplied: false });
    }

    // Map track ID to a readable title
    const trackTitles: Record<string, string> = {
      'full-stack': 'Full Stack Development',
      'data-engineering': 'Data Engineering',
      'solutions-architecture': 'Solutions Architecture',
    };

    return res.json({
      hasApplied: true,
      applicationId: application.id,
      trackId: application.track,
      trackTitle: trackTitles[application.track] || application.track,
      status: application.status,
      testScore: application.testScore,
      createdAt: application.createdAt,
    });
  } catch (error: any) {
    console.error('Error fetching bootcamp status:', error);
    res.status(500).json({ error: 'Failed to fetch application status' });
  }
});

// POST /api/bootcamp/apply
// Create or update a bootcamp application
router.post('/apply', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { track, educationBackground, experienceLevel } = req.body;

    // Check if they already have an active application
    const existing = await prisma.bootcampApplication.findFirst({
      where: { userId },
    });

    if (existing) {
      // Update existing application
      const updated = await prisma.bootcampApplication.update({
        where: { id: existing.id },
        data: { track, educationBackground, experienceLevel, status: 'PENDING_TEST' },
      });
      return res.json({ success: true, application: updated });
    } else {
      // Create new
      const newApp = await prisma.bootcampApplication.create({
        data: {
          userId,
          track,
          educationBackground,
          experienceLevel,
          status: 'PENDING_TEST',
        },
      });
      return res.json({ success: true, application: newApp });
    }
  } catch (error: any) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// POST /api/bootcamp/score
// Update application status after pre-screening test
router.post('/score', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const { scorePercentage } = req.body;

    const application = await prisma.bootcampApplication.findFirst({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Determine new status based on score
    const passed = scorePercentage >= 70;
    const newStatus = passed ? 'UNDER_REVIEW' : 'PENDING_TEST'; // Or rejected

    const updated = await prisma.bootcampApplication.update({
      where: { id: application.id },
      data: { 
        testScore: scorePercentage,
        status: newStatus
      },
    });

    return res.json({ success: true, application: updated });
  } catch (error: any) {
    console.error('Error saving score:', error);
    res.status(500).json({ error: 'Failed to save score' });
  }
});

export default router;
