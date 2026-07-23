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