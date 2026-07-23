export interface VerbalTopic {
  id: string;
  title: string;
  category: 'Grammar & Usage' | 'Vocabulary & Words' | 'Reading & Comprehension' | 'Sentence Structure';
  questionsCount: number;
  marks: number;
  durationMinutes: number;
  description: string;
}

export const CRT_VERBAL_TOPICS: VerbalTopic[] = [
  // Grammar & Usage
  { id: 'subject-verb-agreement', title: 'Subject Verb Agreement', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Rules governing singular/plural subjects and verb agreement.' },
  { id: 'spotting-errors', title: 'Spotting Errors', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying grammatical errors in tense, preposition, and articles.' },
  { id: 'common-errors', title: 'Common Errors', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Frequently confused grammatical rules and incorrect usage.' },
  { id: 'prepositions', title: 'Prepositions', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Appropriate prepositional usage, fixed prepositions, and time/place.' },
  { id: 'active-passive-voice', title: 'Active And Passive Voice', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Converting active voice to passive voice and vice versa.' },
  { id: 'change-of-speech', title: 'Change Of Speech', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Direct to indirect speech transformations and tense adjustments.' },
  { id: 'degrees-comparison', title: 'Degrees Of Comparison', category: 'Grammar & Usage', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Positive, comparative, and superlative adjective transformations.' },

  // Vocabulary & Words
  { id: 'synonyms', title: 'Synonyms', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying words with similar or identical meanings.' },
  { id: 'antonyms', title: 'Antonyms', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying words with opposite meanings.' },
  { id: 'idioms-phrases', title: 'Idioms And Phrases', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Common figurative expressions, idioms, and contextual meanings.' },
  { id: 'phrasal-verbs', title: 'Phrasal Verbs', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Verb + preposition combinations and their specialized meanings.' },
  { id: 'one-word-substitution', title: 'One Word Substitution', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Replacing wordy phrases with concise single-word terms.' },
  { id: 'spellings', title: 'Spellings', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying correctly and incorrectly spelled words.' },
  { id: 'vocabulary-test', title: 'Vocabulary Test', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Advanced vocabulary, contextual word usage, and definitions.' },
  { id: 'selecting-words', title: 'Selecting Words', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Choosing the exact appropriate word to complete sentences.' },
  { id: 'related-pairs-words', title: 'Related Pairs Of Words', category: 'Vocabulary & Words', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying word pairs sharing identical semantic relationships.' },

  // Sentence Structure
  { id: 'sentence-correction', title: 'Sentence Correction', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Improving sentence clarity, modifier placement, and syntax.' },
  { id: 'sentence-completion', title: 'Sentence Completion', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Single and double fill-in-the-blank sentence completion.' },
  { id: 'sentence-formation', title: 'Sentence Formation', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Arranging jumbled clause fragments into coherent sentences.' },
  { id: 'fill-blank-spaces', title: 'Fill The Blank Spaces', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Grammar and vocabulary sentence fill-in exercises.' },
  { id: 'simple-complex-sentences', title: 'Simple And Complex Sentences', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Converting simple, compound, and complex sentence clauses.' },
  { id: 'sentence-elimination', title: 'Sentence Elimination', category: 'Sentence Structure', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Identifying irrelevant sentences in paragraph contexts.' },

  // Reading & Comprehension
  { id: 'reading-comprehension', title: 'Reading Comprehension', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Passage comprehension, central themes, inferences, and tone.' },
  { id: 'comprehensions', title: 'Comprehensions', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Short and long reading passage analysis questions.' },
  { id: 'cloze-test', title: 'Cloze Test', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Paragraph completion with missing word slots.' },
  { id: 'text-completion', title: 'Text Completion', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Multi-blank text passages evaluating logical flow.' },
  { id: 'theme-detection', title: 'Theme Detection', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Extracting primary argument, main thesis, and summary.' },
  { id: 'verbal-analogies', title: 'Verbal Analogies', category: 'Reading & Comprehension', questionsCount: 30, marks: 30, durationMinutes: 40, description: 'Abstract verbal logic and word relationship analogies.' }
];
