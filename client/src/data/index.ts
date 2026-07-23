import type { Category } from './types';
import { coursesData as manualCourses } from './courses.ts';
import { allCourses } from './courses/index';

export const categoriesData: Category[] = [
  { id: "programming", name: "Programming", description: "Core programming languages like Python, Java, C++." },
  { id: "frontend", name: "Frontend", description: "Client-side technologies like HTML, CSS, React." },
  { id: "backend", name: "Backend", description: "Server-side logic and APIs." },
  { id: "database", name: "Databases", description: "SQL and NoSQL data storage solutions." },
  { id: "security", name: "Security", description: "Cybersecurity and ethical hacking." },
  { id: "interview-prep", name: "Interview Prep", description: "Technical screening and behavioral guides." }
];

export const coursesData = [
  ...manualCourses,
  ...allCourses,
];