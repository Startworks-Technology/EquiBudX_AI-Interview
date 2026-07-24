export type AcademicBranch = 
  | 'cs_it'           // Computer Science & IT
  | 'ece'             // Electronics & Communication / Embedded
  | 'ai_ds'           // AI & Data Science
  | 'business'        // Product & Business Management
  | 'core_eng'        // Mechanical, Electrical & Civil
  | 'general';        // General & HR Modules

export type InterviewRoundType = 
  | 'hr_screen'       // Recruiter HR Screening Perspective
  | 'tech_domain'     // Technical Domain Round
  | 'managerial'      // Managerial & Behavioral STAR Round
  | 'full_drive';     // Full Campus Placement Simulation

export type ExperienceLevel = 'fresher' | 'junior' | 'senior';

export interface RoundQuestions {
  hrScreen: string[];
  techDomain: string[];
  managerial: string[];
}

export interface InterviewSkill {
  id: string;
  title: string;
  questions: string[];
}

export interface InterviewModule {
  id: string;
  title: string;
  branch: AcademicBranch;
  category: string;
  description: string;
  icon: string; // lucide icon name
  color: string; // tailwind color class
  accent: string;
  roundQuestions?: RoundQuestions;
  skills: InterviewSkill[];
}

