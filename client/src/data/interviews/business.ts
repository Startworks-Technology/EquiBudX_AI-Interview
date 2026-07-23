import type { InterviewModule } from './types';

export const productManagerModule: InterviewModule = {
  id: "pm-associate",
  title: "Associate Product Manager",
  branch: "business",
  category: "Business & Management",
  description: "Product strategy, user personas, PRDs, metric definitions, and roadmap prioritization.",
  icon: "layout-template",
  color: "bg-purple-50 border-purple-200 hover:border-purple-500",
  accent: "purple",
  roundQuestions: {
    hrScreen: [
      "Tell me about yourself and what drives your passion for Product Management.",
      "Which consumer app or software product do you admire most and why?",
      "How do you communicate with engineering teams when priorities change rapidly?"
    ],
    techDomain: [
      "How would you improve the onboarding user flow for a popular mobile app like Spotify or Uber?",
      "Explain how you prioritize feature backlog items using frameworks like RICE or MoSCoW.",
      "What core metrics (DAU/MAU, Retention, Churn, ARPU) would you track for a B2B SaaS product?",
      "Walk me through how you write a Product Requirement Document (PRD)."
    ],
    managerial: [
      "Describe a scenario where engineers disagreed with your product feature roadmap and how you resolved it.",
      "If a major feature launched and key engagement metrics dropped by 20%, what steps would you take?"
    ]
  },
  skills: [
    {
      id: "product-design",
      title: "Product Design & Strategy",
      questions: [
        "How do you conduct user interview research to uncover real user pain points?",
        "Design a feature for food delivery apps tailored specifically for elderly users."
      ]
    }
  ]
};

export const businessAnalystModule: InterviewModule = {
  id: "business-analyst",
  title: "Business Analyst",
  branch: "business",
  category: "Business & Management",
  description: "SQL data extraction, business requirements, stakeholder alignment, and process flows.",
  icon: "bar-chart",
  color: "bg-amber-50 border-amber-200 hover:border-amber-500",
  accent: "amber",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience analyzing business data and processes.",
      "How do you translate complex technical findings for non-technical executive stakeholders?"
    ],
    techDomain: [
      "Write a SQL approach to find top-selling product categories month-over-month.",
      "What is the difference between functional and non-functional business requirements?",
      "How do you identify process bottlenecks using Business Process Mapping (BPMN)?"
    ],
    managerial: [
      "Describe a time when business stakeholders changed scope mid-project and how you adapted."
    ]
  },
  skills: [
    {
      id: "ba-analytics",
      title: "Data & Process Analytics",
      questions: [
        "How do you validate data integrity before presenting analytics to leadership?"
      ]
    }
  ]
};
