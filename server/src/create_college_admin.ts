import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@college.edu';
  const plainPassword = 'Password@123';
  const role = 'college';

  console.log(`Checking if user ${email} exists...`);
  
  let user = await prisma.user.findUnique({
    where: { email }
  });

  // First ensure the College exists
  let college = await prisma.college.findFirst({
    where: { name: 'VJTI College' }
  });

  if (!college) {
    console.log('Creating VJTI College record...');
    college = await prisma.college.create({
      data: {
        name: 'VJTI College',
        domain: 'vjti.edu'
      }
    });
  }

  if (user) {
    console.log(`User already exists. Updating role to 'college' and linking to college.`);
    user = await prisma.user.update({
      where: { email },
      data: { 
        role: 'college',
        collegeId: college.id
      }
    });
  } else {
    console.log(`Creating new college admin user...`);
    const passwordHash = await bcrypt.hash(plainPassword, 10);
    
    user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName: 'College',
        lastName: 'Admin',
        role: 'college',
        isVerified: true,
        collegeId: college.id
      }
    });
  }

  console.log(`\n✅ Success! College Admin created.`);
  console.log(`You can now log in at http://localhost:5173/login`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${plainPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
