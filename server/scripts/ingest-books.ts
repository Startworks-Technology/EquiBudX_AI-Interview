import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SCRATCH_DIR = path.resolve(__dirname, '../../scratch');
const BOOKS_FILE = path.join(SCRATCH_DIR, 'free-programming-books/books/free-programming-books-langs.md');
const COURSES_OUTPUT_DIR = path.resolve(__dirname, '../../client/src/data/courses');
const INDEX_FILE = path.resolve(__dirname, '../../client/src/data/index.ts');

const TARGET_LANGUAGES = [
  { header: '### HTML and CSS', id: 'html-css', varName: 'htmlCss', title: 'HTML & CSS Mastery', categoryId: 'frontend', thumb: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80' },
  { header: '### Python', id: 'python', varName: 'python', title: 'Python Programming', categoryId: 'programming', thumb: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80' },
  { header: '### Go', id: 'golang', varName: 'golang', title: 'Go (Golang) Core', categoryId: 'backend', thumb: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80' },
  { header: '### Java', id: 'java', varName: 'java', title: 'Java Ecosystem', categoryId: 'programming', thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80' },
  { header: '### C', id: 'c-lang', varName: 'cLang', title: 'C Programming', categoryId: 'programming', thumb: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80' },
  { header: '### C++', id: 'cpp', varName: 'cpp', title: 'C++ Mastery', categoryId: 'programming', thumb: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&q=80' },
  { header: '### C#', id: 'csharp', varName: 'csharp', title: 'C# and .NET', categoryId: 'backend', thumb: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80' },
  { header: '### Ruby', id: 'ruby', varName: 'ruby', title: 'Ruby on Rails', categoryId: 'backend', thumb: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80' },
  { header: '### Rust', id: 'rust', varName: 'rust', title: 'Rust Systems', categoryId: 'programming', thumb: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80' },
  { header: '### Swift', id: 'swift', varName: 'swift', title: 'Swift iOS Dev', categoryId: 'frontend', thumb: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80' },
  { header: '### PHP', id: 'php', varName: 'php', title: 'PHP Backend', categoryId: 'backend', thumb: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=800&q=80' },
  { header: '### TypeScript', id: 'typescript', varName: 'typescript', title: 'Advanced TypeScript', categoryId: 'frontend', thumb: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80' }
];

async function ingestBooks() {
  console.log('Ingesting Free Programming Books...');
  
  if (!fs.existsSync(BOOKS_FILE)) {
    console.error('Books file not found. Make sure it is cloned.');
    return;
  }

  const rawContent = fs.readFileSync(BOOKS_FILE, 'utf-8');
  const lines = rawContent.split('\n');

  const generatedCourses: string[] = [];

  for (const lang of TARGET_LANGUAGES) {
    console.log(`Parsing ${lang.title}...`);
    const modules = [];
    let insideTargetSection = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Stop parsing if we hit the next H3 section
      if (insideTargetSection && line.startsWith('### ')) {
        break;
      }

      if (line === lang.header) {
        insideTargetSection = true;
        continue;
      }

      if (insideTargetSection) {
        // Match Markdown links: * [Title](url) - Description
        const linkMatch = line.match(/^\*\s+\[(.*?)\]\((.*?)\)(.*)$/);
        
        if (linkMatch && modules.length < 30) { // Limit to 30 books per language
          const bookTitle = linkMatch[1].replace(/`/g, '\\`').replace(/\$/g, '\\$').replace(/"/g, '\\"').trim();
          const bookUrl = linkMatch[2];
          const description = linkMatch[3].replace(/^-/, '').replace(/`/g, '\\`').replace(/\$/g, '\\$').trim();

          modules.push({
            id: `mod-${lang.id}-${modules.length}`,
            title: bookTitle,
            content: `
# ${bookTitle}

You can read this free programming book here: [Read Online](${bookUrl})

${description ? `**Description:** ${description}` : ''}
            `.trim()
          });
        }
      }
    }

    // Create the course folder
    const courseFolder = path.join(COURSES_OUTPUT_DIR, lang.id);
    if (!fs.existsSync(courseFolder)) {
      fs.mkdirSync(courseFolder, { recursive: true });
    }

    // Generate the TypeScript file
    const tsContent = `
import type { Course } from '../../types';

export const ${lang.varName}Course: Course = {
  id: "course-${lang.id}",
  categoryId: "${lang.categoryId}",
  title: "${lang.title}",
  description: "Curated collection of free programming books and resources for ${lang.title}.",
  thumbnail: "${lang.thumb}",
  modules: [
    ${modules.map(m => `{
      id: "${m.id}",
      title: "${m.title}",
      content: \`${m.content}\`
    }`).join(',\n    ')}
  ],
  assignment: {
    id: "asg-${lang.id}",
    title: "${lang.title} Final Test",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        text: "Are you ready to build incredible software with ${lang.title}?",
        options: ["Yes", "No"],
        correctAnswer: 0
      }
    ]
  }
};
`;

    fs.writeFileSync(path.join(courseFolder, 'index.ts'), tsContent.trim());
    generatedCourses.push(`import { ${lang.varName}Course } from './courses/${lang.id}';`);
    generatedCourses.push(`${lang.varName}Course`);
    console.log(`Generated ${lang.id} Course with ${modules.length} modules!`);
  }

  updateIndexFile();
}

function updateIndexFile() {
  const dynamicImports = TARGET_LANGUAGES.map(l => `import { ${l.varName}Course } from './courses/${l.id}';`).join('\n');
  const dynamicExports = TARGET_LANGUAGES.map(l => `  ${l.varName}Course,`).join('\n');

  const indexContent = `
import type { Category } from './types';
import { javascriptCourse } from './courses/javascript-interview';
${dynamicImports}
import { coursesData as manualCourses } from './courses';

export const categoriesData: Category[] = [
  { id: "programming", name: "Programming", description: "Core programming languages like Python, Java, C++." },
  { id: "frontend", name: "Frontend", description: "Client-side technologies like HTML, CSS, React." },
  { id: "backend", name: "Backend", description: "Server-side logic and APIs." },
  { id: "database", name: "Databases", description: "SQL and NoSQL data storage solutions." },
  { id: "security", name: "Security", description: "Cybersecurity and ethical hacking." },
  { id: "interview-prep", name: "Interview Prep", description: "Technical screening and behavioral guides." }
];

// All courses are imported from their respective folders!
export const coursesData = [
  ...manualCourses,
  javascriptCourse,
${dynamicExports}
];
`;
  fs.writeFileSync(INDEX_FILE, indexContent.trim());
  console.log('Successfully updated index.ts with new Language courses!');
}

ingestBooks();
