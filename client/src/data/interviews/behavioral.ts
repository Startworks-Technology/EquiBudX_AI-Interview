import type { InterviewModule } from './types';

export const behavioralModule: InterviewModule = {
  id: "self-introduction",
  title: "Self Introduction & HR",
  branch: "general",
  category: "Behavioral",
  description: "Perfect your 'Tell me about yourself' pitch and master standard HR screening questions.",
  icon: "atom", 
  color: "bg-rose-50 border-rose-200 hover:border-rose-500",
  accent: "rose",
  roundQuestions: {
    hrScreen: [
      "Tell me about yourself.",
      "Walk me through your resume.",
      "Why are you interested in this role?",
      "What are your greatest strengths and weaknesses?"
    ],
    techDomain: [
      "Describe a project you are most proud of.",
      "Tell me about a time you had to learn a new skill quickly.",
      "What is your ideal work environment?"
    ],
    managerial: [
      "Where do you see yourself in 5 years?",
      "How do you handle working under pressure?",
      "Tell me about a time you overcame a significant challenge."
    ]
  },
  skills: [
    {
      id: "personal-pitch",
      title: "Personal Pitch",
      questions: [
        "Tell me about yourself.",
        "How would your friends or colleagues describe you?",
        "What makes you unique compared to other candidates?"
      ]
    },
    {
      id: "career-goals",
      title: "Career Goals & Motivation",
      questions: [
        "Why do you want to work for our company?",
        "Why did you choose your major/career path?",
        "What motivates you to do your best work?"
      ]
    },
    {
      id: "adaptability",
      title: "Adaptability & Resilience",
      questions: [
        "Tell me about a time you failed and what you learned from it.",
        "Describe a situation where you had to adapt to a major change.",
        "How do you handle receiving constructive criticism?"
      ]
    }
  ]
};
