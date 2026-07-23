import type { InterviewModule } from './types';

export const systemDesignModule: InterviewModule = {
  id: "system-design",
  title: "System Design Architect",
  branch: "cs_it",
  category: "Specialized / Advanced Roles",
  description: "Microservices, Scalability, Rate Limiting, and Load Balancing.",
  icon: "network",
  color: "bg-indigo-50 border-indigo-200 hover:border-indigo-500",
  accent: "indigo",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and describe your experience designing high-scale distributed systems.",
      "Walk me through a system architecture design on your resume and why you chose those components.",
      "How do you communicate complex architectural trade-offs to product managers and executives?"
    ],
    techDomain: [
      "How would you design a rate-limiting system (Token Bucket / Leaky Bucket) for a high-traffic API?",
      "Explain the CAP theorem and how you choose between Consistency vs Availability in a distributed database.",
      "Compare Microservices versus Monolithic architectures and explain when to decompose a monolith.",
      "How does database sharding work and how do you handle cross-shard queries and rebalancing?",
      "How would you design a URL shortener service (like Bitly) handling 100M daily active requests?",
      "Explain the Saga pattern for handling distributed transactions across microservices."
    ],
    managerial: [
      "Describe a scenario where a system design choice led to unexpected latency or cost spikes and how you fixed it.",
      "How do you evaluate tech debt versus shipping new features under tight business timelines?"
    ]
  },

  skills: [
    {
      id: "scalability",
      title: "Scalability & Load Balancing",
      questions: [
        "How would you design a highly available and scalable system like Twitter or Facebook?",
        "What is load balancing, and what are some common algorithms used to distribute traffic?",
        "Explain the difference between horizontal and vertical scaling.",
        "How do you design a system to handle massive traffic spikes (like Black Friday sales)?",
        "Explain the role of a CDN in reducing latency for global users."
      ]
    },
    {
      id: "microservices",
      title: "Microservices & Distributed Systems",
      questions: [
        "What are microservices? Describe their advantages and disadvantages compared to a monolith.",
        "How do microservices securely and reliably communicate with each other?",
        "Explain the CAP theorem. How does it influence your decisions when designing a distributed database system?",
        "What is the Saga pattern in microservices, and what problem does it solve?",
        "How do you handle distributed tracing and logging across multiple services?"
      ]
    },
    {
      id: "system-patterns",
      title: "System Design Patterns",
      questions: [
        "How would you design a rate-limiting system for a public-facing API to prevent abuse?",
        "Explain how you would design a URL shortening service like Bitly.",
        "What is database sharding? When and why would you implement it in a growing system?",
        "How would you design a real-time collaborative text editor like Google Docs?",
        "Explain the Publish-Subscribe (Pub/Sub) pattern and its use cases."
      ]
    }
  ]
};
