import { Router } from 'express';
import prisma from '../prisma';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, collegeName, degree, graduationYear, course, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        collegeName,
        degree,
        graduationYear,
        course,
        message,
        source: source || 'landing-page'
      }
    });

    res.status(201).json({ message: 'Lead submitted successfully', leadId: lead.id });
  } catch (error) {
    console.error('Lead submission error:', error);
    res.status(500).json({ error: 'Failed to submit lead.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(leads);
  } catch (error) {
    console.error('Fetch leads error:', error);
    res.status(500).json({ error: 'Failed to fetch leads.' });
  }
});

export default router;
