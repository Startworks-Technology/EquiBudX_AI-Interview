import express from 'express';
import { PrismaClient } from '@prisma/client';
import { LLMService } from '../services/llm.service';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

/**
 * POST /api/interview/evaluate
 * Body: { qaPairs: Array<{question: string, answer: string}>, roleType: string }
 */
router.post('/evaluate', async (req, res) => {
  try {
    const { qaPairs, roleType, roundType, experienceLevel, candidateBio, branch } = req.body;

    if (!qaPairs || !Array.isArray(qaPairs)) {
      return res.status(400).json({ error: "Invalid qaPairs format" });
    }

    const evaluation = await LLMService.evaluateInterviewAnswers(
      qaPairs, 
      roleType || 'Frontend Engineer',
      { roundType, experienceLevel, candidateBio, branch }
    );

    res.json({ ...evaluation, qaPairs, roundType, experienceLevel });

  } catch (error: any) {
    console.error("Error in /api/interview/evaluate:", error);
    res.status(500).json({ error: "Failed to evaluate interview" });
  }
});

/**
 * POST /api/interview/record
 * Saves the interview evaluation results to the database
 */
router.post('/record', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { roleType, score, correctAnswers, wrongAnswers, feedbackReport, qaPairs } = req.body;

    // Use any to bypass TS error in case Prisma Client wasn't fully generated due to EPERM
    const record = await (prisma as any).interviewRecord.create({
      data: {
        userId,
        roleType: roleType || 'General',
        score: score || 0,
        correctAnswers: correctAnswers || 0,
        wrongAnswers: wrongAnswers || 0,
        feedbackReport: feedbackReport || '',
        qaPairs: qaPairs || []
      }
    });

    res.json({ success: true, recordId: record.id });
  } catch (error: any) {
    console.error("Error saving interview record:", error);
    res.status(500).json({ error: "Failed to save interview record" });
  }
});

/**
 * GET /api/interview/records
 * Fetches all past interview records for the authenticated user
 */
router.get('/records', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const records = await (prisma as any).interviewRecord.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    res.json(records);
  } catch (error: any) {
    console.error("Error fetching interview records:", error);
    res.status(500).json({ error: "Failed to fetch interview records" });
  }
});

export default router;
