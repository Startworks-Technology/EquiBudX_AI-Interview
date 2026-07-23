import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedAdmin() {
  console.log('🌱 Seeding Super Admin account...');

  const email = 'admin@equibudx.com';
  const password = 'adminpassword123';

  try {
    const existingAdmin = await prisma.user.findUnique({ where: { email } });

    if (existingAdmin) {
      console.log('⚠️ Admin account already exists. Skipping seed.');
      return;
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName: 'Super',
        lastName: 'Admin',
        role: 'admin',
        isVerified: true // Admins are auto-verified
      }
    });

    console.log('✅ Successfully created Super Admin account!');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log('\nYou can now log in at http://localhost:5173/login');
  } catch (error) {
    console.error('❌ Failed to seed admin account:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedAdmin();
