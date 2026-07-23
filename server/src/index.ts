import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';
import interviewRoutes from './routes/interview';
import collegeRoutes from './routes/college';
import adminRoutes from './routes/admin';
import prisma from './prisma';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/interview', interviewRoutes);
app.use('/api/college', collegeRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MockMate Backend is running!' });
});

// Global Error Handler for Serverless stability
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({ error: err?.message || 'Internal Server Error' });
});

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

export default app;
