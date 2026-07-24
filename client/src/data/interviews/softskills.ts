import type { InterviewModule } from './types';

export const softskillsModule: InterviewModule = {
  id: "softskills",
  title: "Behavioral & HR Prep",
  branch: "general",
  category: "Soft Skills",
  description: "Communication, conflict resolution, teamwork, and leadership.",
  icon: "atom", 
  color: "bg-fuchsia-50 border-fuchsia-200 hover:border-fuchsia-500",
  accent: "fuchsia",
  roundQuestions: {
    hrScreen: [
      "Tell me about yourself and your personal core values.",
      "Why are you interested in joining our company culture?",
      "What are your top 3 personal strengths and 1 area you are actively working to improve?",
      "Where do you see yourself in 3 to 5 years professionally?"
    ],
    techDomain: [
      "Describe a time you used the STAR method to articulate a complex technical project.",
      "How do you handle delivering bad news or project delays to stakeholders?",
      "Tell me about a time you mentored a teammate or onboarded a new engineer."
    ],
    managerial: [
      "Describe a major project failure or missed deadline and what key lessons you learned.",
      "Tell me about a conflict with a manager or senior team member and how you resolved it constructively."
    ]
  },

  skills: [
    {
      id: "conflict-resolution",
      title: "Conflict Resolution",
      questions: [
        "Tell me about a time you had a disagreement with a teammate. How did you resolve it?",
        "Describe a situation where a project's requirements changed drastically. How did you handle the frustration?",
        "How do you approach a situation where you and your manager completely disagree on a technical direction?",
        "Tell me about a time you had to work with a difficult or uncooperative colleague.",
        "Give an example of a time you had to apologize for a mistake at work."
      ]
    },
    {
      id: "leadership",
      title: "Leadership & Initiative",
      questions: [
        "Tell me about a time you took the lead on a project without being formally assigned as the leader.",
        "How do you motivate a team when morale is low or a project is falling behind schedule?",
        "Describe a time you saw a problem in your company's process and took the initiative to fix it.",
        "Have you ever had to mentor a junior engineer? What was your approach?",
        "Tell me about a time you had to make a tough decision without having all the necessary data."
      ]
    },
    {
      id: "time-management",
      title: "Time Management",
      questions: [
        "Tell me about a time you failed to meet a deadline. What happened and what did you learn?",
        "How do you prioritize your tasks when you have multiple urgent projects simultaneously?",
        "Describe a situation where you had to quickly learn a new technology to complete a time-sensitive project.",
        "How do you estimate how long a complex feature will take you to build?",
        "Tell me about a time you were overwhelmed with work. How did you handle it?"
      ]
    }
  ]
};
