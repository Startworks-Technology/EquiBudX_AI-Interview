import type { InterviewModule } from './types';

export const fullstackModule: InterviewModule = {
  id: "fullstack",
  title: "Full-Stack Developer",
  branch: "cs_it",
  category: "Core Software Engineering",
  description: "End-to-end development, system design, databases, and APIs.",
  icon: "network",
  color: "bg-purple-50 border-purple-200 hover:border-purple-500",
  accent: "purple",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and explain what motivated you to become a Full-Stack Developer.",
      "Walk me through the end-to-end stack of the most complex project on your resume.",
      "How do you balance development time between polish on the UI vs backend API security?",
      "Describe a time when you had to learn a brand new framework or database under a short deadline."
    ],
    techDomain: [
      "Walk me through the architecture of a full-stack application from browser request to database query.",
      "How do WebSockets differ from HTTP long-polling for real-time bi-directional communication?",
      "Explain Cross-Origin Resource Sharing (CORS), preflight requests, and how to configure CORS safely.",
      "What is optimistic UI updating, and how do you handle state rollbacks if the backend API fails?",
      "Compare SQL vs NoSQL databases and explain when you would use MongoDB vs PostgreSQL.",
      "Explain the N+1 database query problem when using ORMs like Prisma and how to resolve it."
    ],
    managerial: [
      "Describe a situation where a frontend team and backend team had conflicting API design expectations.",
      "How do you prioritize fixing critical production bugs versus delivering new feature roadmap items?"
    ]
  },

  skills: [
    {
      id: "architecture",
      title: "End-to-End Architecture",
      questions: [
        "Walk me through the architecture of a full-stack web application from the database to the UI.",
        "How do you ensure secure communication between your frontend client and backend API?",
        "What are WebSockets and when would you use them over traditional HTTP polling?",
        "Explain Cross-Origin Resource Sharing (CORS) and why it exists.",
        "How do you deploy and host a modern full-stack application?"
      ]
    },
    {
      id: "frontend-integration",
      title: "Frontend Integration",
      questions: [
        "How do you handle global state management across a complex React application?",
        "Explain how you would implement infinite scrolling in a web app.",
        "What is optimistic UI updating, and how do you handle rollbacks if an API fails?",
        "How do you protect private routes in a Single Page Application?",
        "Explain the concept of Server-Side Rendering vs Static Site Generation."
      ]
    },
    {
      id: "databases",
      title: "Databases & ORMs",
      questions: [
        "What is database normalization? When would you choose to denormalize your data?",
        "Explain the difference between SQL and NoSQL databases. When would you use each?",
        "What are the pros and cons of using an ORM like Prisma or TypeORM versus writing raw SQL?",
        "How do you handle database migrations safely in a production environment?",
        "Explain the N+1 query problem and how to solve it."
      ]
    }
  ]
};
