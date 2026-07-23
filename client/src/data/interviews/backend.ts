import type { InterviewModule } from './types';

export const backendModule: InterviewModule = {
  id: "backend",
  title: "Backend Engineer",
  branch: "cs_it",
  category: "Core Software Engineering",
  description: "Node.js, API design, event-driven architecture, and scaling.",
  icon: "server",
  color: "bg-emerald-50 border-emerald-200 hover:border-emerald-500",
  accent: "emerald",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience building server-side applications and APIs.",
      "Walk me through a backend architecture or database schema you designed.",
      "How do you handle backend outages, rate-limiting, and error debugging under pressure?"
    ],
    techDomain: [
      "How does Node.js handle high concurrency despite running single-threaded JavaScript?",
      "What are the key principles of designing a scalable RESTful or gRPC API?",
      "Explain the differences between Redis caching strategies and database-level indexing.",
      "How do you handle database transactions and ACID compliance in distributed systems?",
      "Explain OAuth 2.0 authorization code flow and JWT security best practices."
    ],
    managerial: [
      "Describe a scenario where a database bottleneck degraded production performance and how you resolved it.",
      "How do you negotiate API contracts between mobile/frontend teams and backend systems?"
    ]
  },

  skills: [
    {
      id: "node-core",
      title: "Node.js Core Concepts",
      questions: [
        "How does Node.js handle thousands of concurrent connections despite being single-threaded?",
        "Explain the Event Loop in Node.js and the difference between process.nextTick and setImmediate.",
        "What are streams in Node.js, and when would you use them?",
        "How do you handle unhandled exceptions and promise rejections in a production Node app?",
        "Explain the cluster module in Node.js and how it helps with scaling."
      ]
    },
    {
      id: "api-design",
      title: "API Design & REST",
      questions: [
        "What are the core principles of designing a scalable RESTful API?",
        "How do you handle versioning in a public-facing API?",
        "Explain GraphQL and how it differs from traditional REST APIs.",
        "How would you design a rate-limiting system for an API to prevent abuse?",
        "What is the best way to handle pagination in a REST API?"
      ]
    },
    {
      id: "caching-auth",
      title: "Caching & Authentication",
      questions: [
        "Explain what JSON Web Tokens (JWT) are and the potential security risks of using them.",
        "What is the difference between caching at the database level versus using an in-memory store like Redis?",
        "How does OAuth 2.0 work? Explain the authorization code flow.",
        "What is session-based authentication and how does it compare to token-based auth?",
        "How do you invalidate a cache when underlying data changes?"
      ]
    }
  ]
};
