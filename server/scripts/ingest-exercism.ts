import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SCRATCH_DIR = path.resolve(__dirname, '../../scratch');
const PYTHON_CONCEPTS_DIR = path.join(SCRATCH_DIR, 'python/concepts');
const COURSES_OUTPUT_DIR = path.resolve(__dirname, '../../client/src/data/courses');

async function ingestExercismPython() {
  console.log('Ingesting Deep Python Concepts from Exercism...');
  
  if (!fs.existsSync(PYTHON_CONCEPTS_DIR)) {
    console.error('Python concepts directory not found. Make sure exercism/python is cloned.');
    return;
  }

  const conceptFolders = fs.readdirSync(PYTHON_CONCEPTS_DIR).filter(f => {
    return fs.statSync(path.join(PYTHON_CONCEPTS_DIR, f)).isDirectory();
  });

  const modules = [];

  for (let i = 0; i < conceptFolders.length; i++) {
    const folderName = conceptFolders[i];
    const aboutPath = path.join(PYTHON_CONCEPTS_DIR, folderName, 'about.md');
    
    if (fs.existsSync(aboutPath)) {
      const rawContent = fs.readFileSync(aboutPath, 'utf-8');
      
      // Escape backslashes, backticks and dollar signs for template literal injection
      let content = rawContent.replace(/\\/g, '\\\\');
      content = content.replace(/`/g, '\\`');
      content = content.replace(/\$/g, '\\$');

      // Capitalize folder name for title
      const title = folderName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

      modules.push({
        id: `py-mod-${folderName}`,
        title: title,
        content: content
      });
    }
  }

  // Create the course folder
  const courseFolder = path.join(COURSES_OUTPUT_DIR, 'python');
  if (!fs.existsSync(courseFolder)) {
    fs.mkdirSync(courseFolder, { recursive: true });
  }

  // Overwrite the Python TypeScript file with Deep Content
  const tsContent = `
import type { Course } from '../../types';

export const pythonCourse: Course = {
  id: "course-python",
  categoryId: "programming",
  title: "Python Programming Masterclass",
  description: "A deep, comprehensive dive into Python concepts. Covers loops, dictionaries, classes, and advanced syntax.",
  thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
  modules: [
    ${modules.map(m => `{
      id: "${m.id}",
      title: "${m.title}",
      content: \`${m.content}\`
    }`).join(',\n    ')}
  ],
  assignment: {
    id: "asg-python",
    title: "Python Core Final Test",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        text: "Which of these is used to define a function in Python?",
        options: ["function", "def", "func", "declare"],
        correctAnswer: 1
      },
      {
        id: "q2",
        text: "What does the 'yield' keyword do?",
        options: ["Exits a program", "Pauses function execution and returns a generator", "Calculates yield percentage", "Throws an error"],
        correctAnswer: 1
      }
    ]
  }
};
`;

  fs.writeFileSync(path.join(courseFolder, 'index.ts'), tsContent.trim());
  console.log(`Successfully generated Python Deep Content Course with ${modules.length} modules!`);
}

ingestExercismPython();
