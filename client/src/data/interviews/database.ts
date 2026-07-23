import type { InterviewModule } from './types';

export const databaseModule: InterviewModule = {
  id: "database",
  title: "Database Administrator",
  branch: "cs_it",
  category: "Data & Infrastructure",
  description: "SQL, NoSQL, Normalization, Query Optimization, and ACID properties.",
  icon: "database",
  color: "bg-orange-50 border-orange-200 hover:border-orange-500",
  accent: "orange",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience managing relational and NoSQL databases.",
      "Walk me through a complex database schema or query optimization task on your resume.",
      "How do you communicate database maintenance windows and backup strategies to application teams?"
    ],
    techDomain: [
      "Explain the ACID properties of database transactions and how Isolation levels (Read Committed vs Serializable) work.",
      "How do Clustered vs Non-Clustered B-Tree indexes affect read performance vs write overhead?",
      "What is database normalization (1NF, 2NF, 3NF) and when is denormalization preferred?",
      "How do you analyze an EXPLAIN ANALYZE execution plan to fix slow database queries?",
      "Explain Database Replication (Primary-Replica) vs Database Sharding."
    ],
    managerial: [
      "Describe how you handled a database corruption or data loss incident under pressure."
    ]
  },

  skills: [
    {
      id: "sql-mastery",
      title: "SQL & Relational DBs",
      questions: [
        "Explain the ACID properties of a database transaction. Why are they important?",
        "Describe the differences between an INNER JOIN, LEFT JOIN, and FULL OUTER JOIN.",
        "What is database normalization? Explain the difference between 1NF, 2NF, and 3NF.",
        "What are window functions in SQL and when would you use them?",
        "Explain how you would write a query to find the second highest salary in an Employee table."
      ]
    },
    {
      id: "optimization",
      title: "Query Optimization",
      questions: [
        "Explain the concept of database indexing. How does it improve query performance, and what are its drawbacks?",
        "What is an execution plan, and how do you use it to identify slow queries?",
        "Explain the difference between a clustered and non-clustered index.",
        "How do you handle deadlocks in a highly concurrent database system?",
        "What strategies do you use to optimize a query that is scanning millions of rows?"
      ]
    },
    {
      id: "nosql",
      title: "NoSQL & Distributed Data",
      questions: [
        "What is the difference between SQL and NoSQL databases? When would you choose one over the other?",
        "Explain the CAP theorem and how it applies to distributed databases.",
        "What is database sharding? Explain a common sharding strategy.",
        "How do Document stores like MongoDB differ from Key-Value stores like Redis?",
        "How do you ensure data consistency across multiple NoSQL nodes?"
      ]
    }
  ]
};
