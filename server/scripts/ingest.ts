import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SCRATCH_DIR = path.resolve(__dirname, '../../scratch');
const JS_QUESTIONS_DIR = path.join(SCRATCH_DIR, 'top-javascript-interview-questions/questions');
const OUTPUT_DIR = path.resolve(__dirname, '../../client/src/data');
const COURSES_OUTPUT_DIR = path.join(OUTPUT_DIR, 'courses');

// Ensure output directories exist
if (!fs.existsSync(COURSES_OUTPUT_DIR)) {
  fs.mkdirSync(COURSES_OUTPUT_DIR, { recursive: true });
}

async function ingestJavaScriptQuestions() {
  console.log('Ingesting JavaScript Questions...');
  
  if (!fs.existsSync(JS_QUESTIONS_DIR)) {
    console.error('JS Questions directory not found. Make sure it is cloned.');
    return;
  }

  const questionFolders = fs.readdirSync(JS_QUESTIONS_DIR).filter(f => {
    return fs.statSync(path.join(JS_QUESTIONS_DIR, f)).isDirectory();
  });

  const modules = [];

  for (let i = 0; i < questionFolders.length; i++) {
    const folderName = questionFolders[i];
    const mdxPath = path.join(JS_QUESTIONS_DIR, folderName, 'en-US.mdx');
    
    if (fs.existsSync(mdxPath)) {
      const rawContent = fs.readFileSync(mdxPath, 'utf-8');
      
      // Clean up the MDX frontmatter (naive approach)
      let content = rawContent.replace(/---[\s\S]*?---/, '').trim();
      // Escape backticks so it doesn't break our TS template literal
      content = content.replace(/`/g, '\\`');
      content = content.replace(/\$/g, '\\$');

      const title = folderName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      modules.push({
        id: `js-mod-${i}`,
        title: `${i + 1}. ${title}`,
        content: content
      });
    }
  }

  // Create the course folder
  const courseFolder = path.join(COURSES_OUTPUT_DIR, 'javascript-interview');
  if (!fs.existsSync(courseFolder)) {
    fs.mkdirSync(courseFolder, { recursive: true });
  }

  // Generate the TypeScript file for this specific course
  const tsContent = `
import type { Course } from '../../types';

export const javascriptCourse: Course = {
  id: "top-javascript-questions",
  categoryId: "web-dev",
  title: "Top 50 JavaScript Interview Questions",
  description: "A comprehensive guide to the most frequently asked JavaScript interview questions.",
  thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
  modules: [
    ${modules.map(m => `{
      id: "${m.id}",
      title: "${m.title}",
      content: \`${m.content}\`
    }`).join(',\n    ')}
  ],
  assignment: {
    id: "asg-js",
    title: "JavaScript Core Final",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        text: "What is a closure in JavaScript?",
        options: ["A locked variable", "A function bundled with its lexical environment", "A syntax error", "A new block scope"],
        correctAnswer: 1
      },
      {
        id: "q2",
        text: "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
        options: ["var", "let", "const", "static"],
        correctAnswer: 2
      }
    ]
  }
};
`;

  fs.writeFileSync(path.join(courseFolder, 'index.ts'), tsContent.trim());
  console.log(`Generated JS Course with ${modules.length} modules!`);
}

function generateTypesAndIndex() {
  const typesContent = `
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: Module[];
  assignment: {
    id: string;
    title: string;
    passingScore: number;
    questions: Question[];
  }
}
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'types.ts'), typesContent.trim());

  const indexContent = `
import type { Category } from './types';
import { javascriptCourse } from './courses/javascript-interview';
import { coursesData as manualCourses } from './courses';

export const categoriesData: Category[] = [
  { id: "core-cs", name: "Core CS", description: "Foundational computer science concepts." },
  { id: "core-systems", name: "Core Systems", description: "System architecture, networking, and scaling." },
  { id: "web-dev", name: "Web Development", description: "Frontend and Backend engineering." },
  { id: "interview-prep", name: "Interview Prep", description: "Technical screening and behavioral guides." }
];

// All courses are imported from their respective folders!
export const coursesData = [
  ...manualCourses,
  javascriptCourse
];
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent.trim());
  console.log('Generated index.ts and types.ts');
}

async function run() {
  await ingestJavaScriptQuestions();
  generateTypesAndIndex();
}

run();
