import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@equibudx.in';
  const password = 'admin';
  const passwordHash = await bcrypt.hash(password, 10);

  const adminUser = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: 'admin',
      isVerified: true
    },
    create: {
      email,
      firstName: 'Admin',
      lastName: 'User',
      passwordHash,
      role: 'admin',
      isVerified: true
    },
  });

  console.log('Admin user ensured:', adminUser.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
