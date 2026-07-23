export interface ReasoningTopic {
  id: string;
  title: string;
  category: 'Verbal Reasoning' | 'Non-Verbal Reasoning' | 'Analytical & Puzzles' | 'Critical Reasoning';
  questionsCount: number;
  marks: number;
  durationMinutes: number;
  description: string;
}

export const CRT_REASONING_TOPICS: ReasoningTopic[] = [
  // Critical & Verbal Reasoning
  { id: 'statement-conclusion', title: 'Statement And Conclusion', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Drawing valid logical conclusions based strictly on given premises.' },
  { id: 'statement-argument', title: 'Statement And Argument', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Evaluating strong vs weak arguments for policy/social statements.' },
  { id: 'statement-assumption', title: 'Statement And Assumption', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Identifying implicit unstated assumptions behind given statements.' },
  { id: 'statement-course-action', title: 'Statement And Course of Action', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Determining practical and feasible solutions to problem scenarios.' },
  { id: 'cause-and-effect', title: 'Cause And Effect', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Establishing cause and effect relationships between paired events.' },
  { id: 'syllogism', title: 'Syllogism', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Venn-diagram based deductions (All A are B, Some B are C).' },
  { id: 'logical-deduction', title: 'Logical Deduction', category: 'Critical Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Deductive logic and propositional truth evaluations.' },
  { id: 'coded-inequalities', title: 'Coded Inequalities', category: 'Critical Reasoning', questionsCount: 20, marks: 20, durationMinutes: 30, description: 'Deciphering coded inequality symbols (A @ B means A > B).' },

  // Verbal Reasoning & Codes
  { id: 'alphabet-letter-test', title: 'Alphabet Or Letter Test', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Alphabetical series, position values, and letter shifting.' },
  { id: 'word-analogy', title: 'Word Analogy', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Word pair relationships: Synonyms, antonyms, cause, function.' },
  { id: 'number-analogy', title: 'Number Analogy', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Numerical relationships and mathematical operation pairs.' },
  { id: 'mixed-analogy', title: 'Mixed Analogy', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Combined letter-number and word-symbol analogy pairs.' },
  { id: 'analogous-pair-series', title: 'Analogous Pair Series', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Sequences of related pairs following pattern progression.' },
  { id: 'analogous-pair-completion', title: 'Analogous Pair Completion', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Completing missing elements in logical analogy pairs.' },
  { id: 'simple-analogy', title: 'Simple Analogy', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Basic direct analogies between words, numbers, and concepts.' },
  { id: 'coding-decoding', title: 'Coding And Decoding', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Letter shifting, substitution codes, and matrix decoding.' },
  { id: 'classification', title: 'Classification', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Odd one out classification across words, numbers, and symbols.' },
  { id: 'logical-sequence-words', title: 'Logical Sequence of Words', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Arranging words in meaningful hierarchy or natural order.' },
  { id: 'word-formation', title: 'Word Formation', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Constructing valid words from given letter combinations.' },
  { id: 'odd-man-out-reasoning', title: 'Odd Man Out', category: 'Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Identifying non-conforming elements in reasoning sets.' },

  // Analytical Puzzles & Arrangements
  { id: 'blood-relations', title: 'Blood Relations', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Family trees, coded relations, and generational relationships.' },
  { id: 'direction-sense', title: 'Direction Sense', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'North/South/East/West turns, distance, and shadow angles.' },
  { id: 'seating-arrangement', title: 'Seating Arrangement', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Linear, circular, inward/outward facing seating puzzles.' },
  { id: 'number-puzzles', title: 'Number Puzzles', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Missing numbers in geometric grids, triangles, and matrices.' },
  { id: 'analytical-puzzles', title: 'Analytical Puzzles', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Floor puzzles, scheduling puzzles, and multi-attribute logic.' },
  { id: 'venn-diagram', title: 'Venn Diagram', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Euler-Venn diagram set intersections and counts.' },
  { id: 'sequential-reasoning', title: 'Sequential Reasoning', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Machine input-output sequencing and step transformation.' },
  { id: 'dice', title: 'Dice', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Opposite faces on standard/ordinary dice and folded cubes.' },
  { id: 'ranking', title: 'Ranking', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Order, positions from top/bottom, and rank comparisons.' },
  { id: 'clock-reasoning', title: 'Clock', category: 'Analytical & Puzzles', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Time calculation, slow/fast clock error analysis.' },

  // Non-Verbal & Visual Reasoning
  { id: 'mirror-images', title: 'Mirror Images', category: 'Non-Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Lateral inversion of figures, letters, and numbers in mirrors.' },
  { id: 'image-series', title: 'Image Series', category: 'Non-Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Sequential rotation, addition/deletion of visual elements.' },
  { id: 'embedded-images', title: 'Embedded Images', category: 'Non-Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Finding hidden sub-figures embedded within complex patterns.' },
  { id: 'paper-cutting-folding', title: 'Paper Cutting And Folding', category: 'Non-Verbal Reasoning', questionsCount: 30, marks: 30, durationMinutes: 45, description: 'Visualizing unfolded patterns after punch cuts on folded paper.' }
];
