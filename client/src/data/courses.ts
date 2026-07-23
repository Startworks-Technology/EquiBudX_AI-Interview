export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of correct option
}

export interface Module {
  id: string;
  title: string;
  content: string; // Markdown or raw text
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  categoryId: string; // Links to Category.id
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

export const categoriesData: Category[] = [
  {
    id: "core-cs",
    name: "Core CS",
    description: "Foundational computer science concepts."
  },
  {
    id: "core-systems",
    name: "Core Systems",
    description: "System architecture, networking, and scaling."
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Frontend and Backend engineering."
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    description: "Technical screening and behavioral guides."
  }
];

export const coursesData: Course[] = [];
