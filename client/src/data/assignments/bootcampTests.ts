export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizSkill {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: QuizSkill[];
}

export const bootcampTests: QuizModule[] = [
  {
    id: 'full-stack-eligibility',
    title: 'Full Stack Development - Eligibility Test',
    description: 'Assess your foundational knowledge in programming logic, basic web concepts, and problem-solving to qualify for the Full Stack Bootcamp.',
    icon: 'code',
    color: 'blue',
    skills: [
      {
        id: 'fs-logic',
        title: 'Programming Logic & Basics',
        questions: [
          {
            id: 'fs1',
            question: 'Which of the following best describes an API?',
            options: [
              'A language used to style web pages',
              'A set of rules that allows different software applications to communicate',
              'A database management system',
              'A tool for compiling code into machine language'
            ],
            correctAnswer: 1,
            explanation: 'An Application Programming Interface (API) acts as an intermediary, allowing two applications to talk to each other.'
          },
          {
            id: 'fs2',
            question: 'If an array has 5 elements, what is the index of the last element?',
            options: ['5', '4', '6', 'It depends on the language'],
            correctAnswer: 1,
            explanation: 'In almost all modern programming languages, arrays are 0-indexed, meaning the first element is at index 0 and the 5th element is at index 4.'
          },
          {
            id: 'fs3',
            question: 'What is the primary purpose of version control systems like Git?',
            options: [
              'To automatically debug code',
              'To track changes in source code and collaborate with others',
              'To deploy applications to a server',
              'To write faster executing code'
            ],
            correctAnswer: 1,
            explanation: 'Git allows multiple developers to work on the same codebase simultaneously by tracking changes and merging them safely.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-engineering-eligibility',
    title: 'Data Engineering - Eligibility Test',
    description: 'Test your understanding of databases, SQL basics, and data structures to qualify for the Data Engineering Bootcamp.',
    icon: 'database',
    color: 'emerald',
    skills: [
      {
        id: 'de-sql',
        title: 'Data & SQL Fundamentals',
        questions: [
          {
            id: 'de1',
            question: 'What does SQL stand for?',
            options: [
              'Structured Query Language',
              'Sequential Query Logic',
              'Standard Question Language',
              'System Query Layout'
            ],
            correctAnswer: 0,
            explanation: 'SQL (Structured Query Language) is the standard language used to communicate with relational databases.'
          },
          {
            id: 'de2',
            question: 'Which SQL command is used to extract data from a database?',
            options: ['EXTRACT', 'GET', 'SELECT', 'FETCH'],
            correctAnswer: 2,
            explanation: 'The SELECT statement is used to select data from a database, returning the data in a result table.'
          },
          {
            id: 'de3',
            question: 'What is the primary difference between a relational database and a NoSQL database?',
            options: [
              'Relational databases cannot store large amounts of data',
              'NoSQL databases use tables, rows, and columns',
              'Relational databases use rigid schemas and tables, while NoSQL is flexible and document/key-value based',
              'There is no difference'
            ],
            correctAnswer: 2,
            explanation: 'Relational databases (like PostgreSQL) use strict table schemas, whereas NoSQL databases (like MongoDB) are schema-less and store data in flexible formats.'
          }
        ]
      }
    ]
  },
  {
    id: 'solutions-arch-eligibility',
    title: 'Solutions Architecture - Eligibility Test',
    description: 'Evaluate your foundational grasp of networking, cloud concepts, and system design for the Architecture track.',
    icon: 'server',
    color: 'purple',
    skills: [
      {
        id: 'sa-cloud',
        title: 'Cloud & Infrastructure Basics',
        questions: [
          {
            id: 'sa1',
            question: 'What does "High Availability" mean in system architecture?',
            options: [
              'The system is available in every country',
              'The system is designed to operate continuously without failing for a designated period',
              'The system can process high volumes of data in seconds',
              'The system is highly secure against hackers'
            ],
            correctAnswer: 1,
            explanation: 'High Availability (HA) ensures that a system remains operational and accessible, even if some of its components fail.'
          },
          {
            id: 'sa2',
            question: 'Which of the following is a characteristic of Serverless computing?',
            options: [
              'There are no physical servers involved',
              'Developers must manually provision and scale servers',
              'You only pay for the compute time you consume',
              'It requires maintaining your own data center'
            ],
            correctAnswer: 2,
            explanation: 'In serverless, cloud providers dynamically manage the allocation of machine resources, and you are billed only for the execution time of your code.'
          },
          {
            id: 'sa3',
            question: 'What is the purpose of a Load Balancer?',
            options: [
              'To compress data before storing it',
              'To distribute incoming network traffic across multiple servers',
              'To balance the financial cost of cloud services',
              'To compile code faster'
            ],
            correctAnswer: 1,
            explanation: 'Load balancers improve the responsiveness and availability of applications by distributing traffic evenly across a cluster of servers.'
          }
        ]
      }
    ]
  }
];
