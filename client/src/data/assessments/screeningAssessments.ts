export interface ScreeningSection {
  name: 'Quant' | 'Reasoning' | 'Verbal' | 'Technical';
  questionsCount: number;
  maxMarks: number;
  negativeMarks: number;
}

export interface ScreeningAssessment {
  id: string;
  title: string;
  date: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  sections: ScreeningSection[];
  description: string;
}

export const CRT_SCREENING_ASSESSMENTS: ScreeningAssessment[] = [
  {
    id: 'screening-2024-12-20',
    title: '20-Dec-2024 Screening Assessment',
    date: '20-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Comprehensive campus screening benchmark exam covering Quant, Reasoning, Verbal, and Core Technical concepts.'
  },
  {
    id: 'screening-2024-12-22',
    title: '22-Dec-2024 Screening Assessment',
    date: '22-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Campus placement screening paper evaluating numerical ability, logical deduction, English usage, and programming fundamentals.'
  },
  {
    id: 'screening-2024-12-23',
    title: '23-Dec-2024 Screening Assessment',
    date: '23-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Tier-1 company qualifier simulation exam.'
  },
  {
    id: 'screening-2024-12-24',
    title: '24-Dec-2024 Screening Assessment',
    date: '24-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'National Qualifier test simulation for campus hiring drives.'
  },
  {
    id: 'screening-2024-12-25',
    title: '25-Dec-2024 Screening Assessment',
    date: '25-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Full-length screening test set evaluating aptitude and technical domain.'
  },
  {
    id: 'screening-2024-12-26',
    title: '26-Dec-2024 Screening Assessment',
    date: '26-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Campus placement qualifier exam.'
  },
  {
    id: 'screening-2024-12-27',
    title: '27-Dec-2024 Screening Assessment',
    date: '27-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Aptitude and Technical domain benchmark assessment.'
  },
  {
    id: 'screening-2024-12-28',
    title: '28-Dec-2024 Screening Assessment',
    date: '28-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Comprehensive screening assessment paper.'
  },
  {
    id: 'screening-2024-12-29',
    title: '29-Dec-2024 Screening Assessment',
    date: '29-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Pre-drive qualifier exam for corporate campus recruitment.'
  },
  {
    id: 'screening-2024-12-30',
    title: '30-Dec-2024 Screening Assessment',
    date: '30-Dec-2024',
    totalQuestions: 50,
    totalMarks: 50,
    durationMinutes: 60,
    sections: [
      { name: 'Quant', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Reasoning', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Verbal', questionsCount: 10, maxMarks: 10, negativeMarks: 0 },
      { name: 'Technical', questionsCount: 20, maxMarks: 20, negativeMarks: 0 }
    ],
    description: 'Final screening assessment paper.'
  }
];
