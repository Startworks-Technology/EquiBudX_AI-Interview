import express from 'express';
import bcrypt from 'bcrypt';
import prisma from '../prisma';
import { authenticateToken, requireRole } from '../middleware/auth';

const router = express.Router();

/**
 * Helper to ensure a college user has a dedicated College entity & collegeId
 */
async function ensureCollegeId(user: any): Promise<string | null> {
  if (user.collegeId) return user.collegeId;

  if (user.role === 'college') {
    const college = await prisma.college.create({
      data: {
        name: user.firstName || 'My College'
      }
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { collegeId: college.id }
    });

    user.collegeId = college.id;
    return college.id;
  }

  return null;
}

/**
 * GET /api/college/dashboard
 * Protected: Only accessible by users with 'college' or 'admin' role.
 */
router.get('/dashboard', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const adminCollegeId = await ensureCollegeId(req.user);

    // Filter students by collegeId if the admin belongs to a college.
    // If it's a superadmin without a collegeId, we fetch all students.
    const studentWhere = adminCollegeId ? { role: 'student', collegeId: adminCollegeId } : { role: 'student' };

    // 1. Total Students
    const totalStudents = await prisma.user.count({ where: studentWhere });

    // We need to find all student IDs to filter their scorecards/interviews
    const students = await prisma.user.findMany({
      where: studentWhere,
      select: { id: true, firstName: true, lastName: true }
    });
    const studentIds = students.map((s: any) => s.id);

    // 2. Assessments Completed
    const scorecardsCount = await prisma.scorecard.count({
      where: { studentId: { in: studentIds } }
    });
    const interviewsCount = await prisma.interviewRecord.count({
      where: { userId: { in: studentIds } }
    });
    const totalAssessments = scorecardsCount + interviewsCount;

    // 3. Average Score
    const scorecards = await prisma.scorecard.findMany({
      where: { studentId: { in: studentIds } },
      select: { scorePercentage: true }
    });
    const interviews = await prisma.interviewRecord.findMany({
      where: { userId: { in: studentIds } },
      select: { score: true }
    });

    let totalScore = 0;
    scorecards.forEach((s: any) => totalScore += s.scorePercentage);
    interviews.forEach((i: any) => totalScore += i.score);

    const averageScore = totalAssessments > 0 ? (totalScore / totalAssessments).toFixed(1) : 0;

    // 4. Recent Activity (Latest 5 Scorecards + 5 Interviews)
    const recentScorecards = await prisma.scorecard.findMany({
      where: { studentId: { in: studentIds } },
      include: { student: { select: { firstName: true, lastName: true } } },
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    const recentInterviews = await prisma.interviewRecord.findMany({
      where: { userId: { in: studentIds } },
      include: { user: { select: { firstName: true, lastName: true } } },
      orderBy: { createdAt: 'desc' },
      take: 5
    });

    // Combine and sort by date descending
    const rawActivity = [
      ...recentScorecards.map((s: any) => ({
        id: s.id,
        type: 'course_quiz',
        studentName: `${s.student.firstName} ${s.student.lastName || ''}`.trim(),
        details: `Completed ${s.courseTitle} Quiz with ${s.scorePercentage}%`,
        createdAt: s.createdAt
      })),
      ...recentInterviews.map((i: any) => ({
        id: i.id,
        type: 'mock_interview',
        studentName: `${i.user.firstName} ${i.user.lastName || ''}`.trim(),
        details: `Completed ${i.roleType} Interview with ${i.score}%`,
        createdAt: i.createdAt
      }))
    ];

    rawActivity.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const recentActivity = rawActivity.slice(0, 5);

    res.json({
      totalStudents,
      assessmentsCompleted: totalAssessments,
      averageScore,
      recentActivity
    });
  } catch (error) {
    console.error('College Dashboard Error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

/**
 * POST /api/college/add-students
 * Accepts a JSON array of students parsed from CSV on the frontend.
 */
router.post('/add-students', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const { students } = req.body;
    const collegeId = await ensureCollegeId(req.user);
    console.log("=== ADD STUDENTS CALLED ===");
    console.log("req.user is:", req.user);
    console.log("Extracted collegeId is:", collegeId);

    if (!Array.isArray(students) || students.length === 0) {
      return res.status(400).json({ error: 'Valid students array is required.' });
    }

    const defaultPassword = 'Password@123';
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(defaultPassword, saltRounds);

    let addedCount = 0;
    let skippedCount = 0;

    for (const student of students) {
      if (!student.email || !student.firstName) continue;

      const existingUser = await prisma.user.findUnique({ where: { email: student.email } });
      if (existingUser) {
        if (!existingUser.collegeId && collegeId) {
          await prisma.user.update({
            where: { id: existingUser.id },
            data: { collegeId }
          });
          addedCount++;
        } else {
          skippedCount++;
        }
        continue;
      }

      await prisma.user.create({
        data: {
          email: student.email,
          firstName: student.firstName,
          lastName: student.lastName || '',
          passwordHash,
          role: 'student',
          collegeId: collegeId || undefined
        }
      });
      addedCount++;
    }

    res.json({ 
      message: 'Upload complete', 
      added: addedCount, 
      skipped: skippedCount,
      defaultPassword 
    });
  } catch (error) {
    console.error('Add Students Error:', error);
    res.status(500).json({ error: 'Failed to add students' });
  }
});

/**
 * GET /api/college/students
 * Fetch all students belonging to the college for the roster page.
 */
router.get('/students', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const adminCollegeId = await ensureCollegeId(req.user);
    const studentWhere = adminCollegeId ? { role: 'student', collegeId: adminCollegeId } : { role: 'student' };

    const students = await prisma.user.findMany({
      where: studentWhere,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        isVerified: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(students);
  } catch (error) {
    console.error('Fetch Students Error:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

/**
 * DELETE /api/college/students/:studentId
 * Remove a student from the college roster (unlink collegeId).
 */
router.delete('/students/:studentId', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const { studentId } = req.params;
    const adminCollegeId = await ensureCollegeId(req.user);

    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (adminCollegeId && student.collegeId !== adminCollegeId) {
      return res.status(403).json({ error: 'Unauthorized to remove this student' });
    }

    await prisma.user.update({
      where: { id: studentId },
      data: { collegeId: null }
    });

    res.json({ message: 'Student removed from college roster successfully' });
  } catch (error) {
    console.error('Remove Student Error:', error);
    res.status(500).json({ error: 'Failed to remove student' });
  }
});

/**
 * POST /api/college/students/:studentId/reset-password
 * Reset a student's password back to default 'Password@123'.
 */
router.post('/students/:studentId/reset-password', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const { studentId } = req.params;
    const adminCollegeId = await ensureCollegeId(req.user);

    const student = await prisma.user.findUnique({ where: { id: studentId } });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    if (adminCollegeId && student.collegeId !== adminCollegeId) {
      return res.status(403).json({ error: 'Unauthorized to reset password for this student' });
    }

    const defaultPassword = 'Password@123';
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(defaultPassword, saltRounds);

    await prisma.user.update({
      where: { id: studentId },
      data: { passwordHash }
    });

    res.json({ message: 'Password reset to default', defaultPassword });
  } catch (error) {
    console.error('Reset Student Password Error:', error);
    res.status(500).json({ error: 'Failed to reset student password' });
  }
});


/**
 * GET /api/college/settings
 * Fetch settings for the current logged-in college user.
 */
router.get('/settings', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: { college: true }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const institutionName = user.college?.name || user.firstName || '';

    res.json({
      institutionName,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    });
  } catch (error) {
    console.error('Fetch College Settings Error:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

/**
 * PUT /api/college/settings
 * Update institution name and optional password.
 */
router.put('/settings', authenticateToken, requireRole(['college', 'admin']), async (req: any, res: any) => {
  try {
    const { institutionName, currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const updateData: any = {};

    // 1. If institutionName provided, update user's firstName (and college name if linked)
    if (institutionName && institutionName.trim() !== '') {
      updateData.firstName = institutionName.trim();
      if (user.collegeId) {
        await prisma.college.update({
          where: { id: user.collegeId },
          data: { name: institutionName.trim() }
        });
      }
    }

    // 2. If password update requested
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({ error: 'Current password is required to set a new password.' });
      }

      if (!user.passwordHash) {
        return res.status(400).json({ error: 'No password hash found for account.' });
      }

      const valid = await bcrypt.compare(currentPassword, user.passwordHash);
      if (!valid) {
        return res.status(400).json({ error: 'Current password is incorrect.' });
      }

      const saltRounds = 10;
      updateData.passwordHash = await bcrypt.hash(newPassword, saltRounds);
    }

    let updatedUser = user;
    if (Object.keys(updateData).length > 0) {
      updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData
      });
    }

    res.json({
      message: 'College settings updated successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        role: updatedUser.role
      }
    });
  } catch (error) {
    console.error('Update College Settings Error:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
});

export default router;

