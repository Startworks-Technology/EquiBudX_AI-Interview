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

export const quizModules: QuizModule[] = [
  {
    id: 'javascript',
    title: 'JavaScript Fundamentals',
    description: 'Master the core concepts of JavaScript including closures, event loop, and prototypes.',
    icon: 'code',
    color: 'yellow',
    skills: [
      {
        id: 'js-core',
        title: 'Core Mechanics & Scopes',
        questions: [
          {
            id: 'js1',
            question: 'What is a closure in JavaScript?',
            options: [
              'A function that takes another function as an argument',
              'A function bundled together with references to its surrounding state',
              'A method used to close a database connection',
              'A strict mode feature that prevents memory leaks'
            ],
            correctAnswer: 1,
            explanation: 'A closure gives you access to an outer function\'s scope from an inner function, even after the outer function has returned.'
          },
          {
            id: 'js2',
            question: 'Which of the following is NOT a JavaScript data type?',
            options: ['Undefined', 'Number', 'Boolean', 'Float'],
            correctAnswer: 3,
            explanation: 'Float is not a distinct data type in JavaScript. All numbers in JavaScript are 64-bit floating-point numbers.'
          },
          {
            id: 'js3',
            question: 'What is the output of: console.log(typeof null)?',
            options: ['null', 'undefined', 'object', 'number'],
            correctAnswer: 2,
            explanation: 'In JavaScript, typeof null returns "object". This is a known bug in JavaScript that was kept for backward compatibility.'
          }
        ]
      },
      {
        id: 'js-async',
        title: 'Asynchronous JavaScript',
        questions: [
          {
            id: 'js4',
            question: 'How does the event loop handle promises?',
            options: [
              'Promises are pushed to the Macrotask queue',
              'Promises are pushed to the Microtask queue',
              'Promises are executed synchronously',
              'Promises bypass the event loop entirely'
            ],
            correctAnswer: 1,
            explanation: 'Promises resolve into the Microtask queue, which has higher priority and is emptied before the next Macrotask is processed.'
          },
          {
            id: 'js5',
            question: 'What does the "bind" method do?',
            options: [
              'Executes a function immediately with a specified this context',
              'Creates a new function that, when called, has its this keyword set to the provided value',
              'Links two DOM elements together',
              'Binds an event listener to an element'
            ],
            correctAnswer: 1,
            explanation: 'The bind() method creates a new function that, when called, has its this keyword set to the provided value.'
          }
        ]
      }
    ]
  },
  {
    id: 'react',
    title: 'React & Hooks',
    description: 'Test your knowledge on React lifecycle, hooks, context, and performance optimization.',
    icon: 'atom',
    color: 'cyan',
    skills: [
      {
        id: 'react-fundamentals',
        title: 'React Fundamentals',
        questions: [
          {
            id: 'r1',
            question: 'What is the primary purpose of the Virtual DOM in React?',
            options: [
              'To replace the browser\'s actual DOM completely',
              'To allow React to run on the server',
              'To optimize rendering by minimizing direct manipulation of the actual DOM',
              'To provide a styling engine for React components'
            ],
            correctAnswer: 2,
            explanation: 'React uses the Virtual DOM to batch updates and compute the minimal set of changes needed before updating the actual DOM.'
          },
          {
            id: 'r3',
            question: 'What is the correct way to update a state object in React?',
            options: [
              'state.key = newValue',
              'setState(state.key = newValue)',
              'setState({ ...state, key: newValue })',
              'setState({ key: newValue })'
            ],
            correctAnswer: 2,
            explanation: 'State in React should be treated as immutable. You must create a new object by spreading the previous state and overriding the changed property.'
          }
        ]
      },
      {
        id: 'react-hooks',
        title: 'React Hooks & Performance',
        questions: [
          {
            id: 'r2',
            question: 'When does the useEffect hook run by default?',
            options: [
              'Only after the initial render',
              'Only before the component unmounts',
              'After every render (initial and updates)',
              'Before every render'
            ],
            correctAnswer: 2,
            explanation: 'By default, without a dependency array, useEffect runs after the first render and after every update.'
          },
          {
            id: 'r4',
            question: 'Why should you use the "key" prop when rendering lists?',
            options: [
              'It provides a unique ID for CSS styling',
              'It helps React identify which items have changed, are added, or are removed',
              'It is required for the array map function to work',
              'It encrypts the data being rendered'
            ],
            correctAnswer: 1,
            explanation: 'Keys help React optimize re-renders by giving elements a stable identity across renders, preventing unnecessary DOM mutations.'
          },
          {
            id: 'r5',
            question: 'What is React.memo used for?',
            options: [
              'To memorize global state variables',
              'To cache API responses',
              'To prevent a functional component from re-rendering if its props have not changed',
              'To store sensitive user data in local storage'
            ],
            correctAnswer: 2,
            explanation: 'React.memo is a higher-order component that skips re-rendering a component if its props haven\'t changed.'
          }
        ]
      }
    ]
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express',
    description: 'Evaluate your server-side JavaScript skills with Node.js and Express.',
    icon: 'server',
    color: 'emerald',
    skills: [
      {
        id: 'node-arch',
        title: 'Architecture & Concurrency',
        questions: [
          {
            id: 'n1',
            question: 'How does Node.js handle concurrency?',
            options: [
              'Using multi-threading',
              'Using a single-threaded event loop with non-blocking I/O',
              'Using multiple isolated processes per request',
              'Using Web Workers'
            ],
            correctAnswer: 1,
            explanation: 'Node.js uses an event-driven, non-blocking I/O model that operates on a single thread via the event loop.'
          },
          {
            id: 'n5',
            question: 'How can you scale a Node.js application to utilize all CPU cores?',
            options: [
              'By using the cluster module',
              'Node.js automatically uses all CPU cores natively',
              'By increasing the memory limit in V8',
              'By using the worker_threads module exclusively'
            ],
            correctAnswer: 0,
            explanation: 'The cluster module allows easy creation of child processes that all share server ports, allowing you to utilize multi-core systems.'
          }
        ]
      },
      {
        id: 'express-api',
        title: 'Express & Modules',
        questions: [
          {
            id: 'n2',
            question: 'What is the role of middleware in Express.js?',
            options: [
              'To connect the application to a database',
              'Functions that have access to the request/response objects and the next middleware',
              'To compile TypeScript into JavaScript',
              'To serve HTML templates'
            ],
            correctAnswer: 1,
            explanation: 'Middleware functions can execute any code, make changes to the request/response objects, or call the next middleware in the stack.'
          },
          {
            id: 'n3',
            question: 'Which module is used to handle file operations in Node.js?',
            options: ['path', 'http', 'fs', 'crypto'],
            correctAnswer: 2,
            explanation: 'The "fs" (file system) module provides an API for interacting with the file system.'
          }
        ]
      }
    ]
  },
  {
    id: 'sql',
    title: 'SQL & Databases',
    description: 'Questions on relational databases, querying, normalization, and ACID properties.',
    icon: 'database',
    color: 'blue',
    skills: [
      {
        id: 'sql-basics',
        title: 'Database Basics & ACID',
        questions: [
          {
            id: 's1',
            question: 'What does the ACID acronym stand for in database systems?',
            options: [
              'Atomicity, Consistency, Isolation, Durability',
              'Accuracy, Completeness, Integrity, Durability',
              'Atomicity, Concurrency, Isolation, Dependency',
              'Association, Consistency, Indexing, Data'
            ],
            correctAnswer: 0,
            explanation: 'ACID properties guarantee that database transactions are processed reliably.'
          },
          {
            id: 's3',
            question: 'What is the purpose of database normalization?',
            options: [
              'To increase data redundancy and improve read speed',
              'To encrypt the data in the database',
              'To reduce data redundancy and improve data integrity',
              'To convert SQL to NoSQL structures'
            ],
            correctAnswer: 2,
            explanation: 'Normalization organizes data in a database to reduce data redundancy and ensure data dependencies make sense.'
          }
        ]
      },
      {
        id: 'sql-queries',
        title: 'Querying & Optimization',
        questions: [
          {
            id: 's2',
            question: 'Which SQL JOIN returns all rows from the left table, and the matched rows from the right table?',
            options: ['INNER JOIN', 'RIGHT JOIN', 'LEFT JOIN', 'FULL OUTER JOIN'],
            correctAnswer: 2,
            explanation: 'A LEFT JOIN returns all records from the left table, and the matched records from the right table.'
          },
          {
            id: 's5',
            question: 'What is an index in a database?',
            options: [
              'A table of contents for the database structure',
              'A data structure that improves the speed of data retrieval operations',
              'A backup copy of the database',
              'A constraint that ensures data uniqueness'
            ],
            correctAnswer: 1,
            explanation: 'Indexes are used to quickly locate data without having to search every row in a database table every time it is accessed.'
          }
        ]
      }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design Basics',
    description: 'Understand architecture, scaling, caching, and distributed systems.',
    icon: 'network',
    color: 'indigo',
    skills: [
      {
        id: 'scaling',
        title: 'Scaling & Load Balancing',
        questions: [
          {
            id: 'sd1',
            question: 'What is the primary purpose of a Load Balancer?',
            options: [
              'To cache static assets globally',
              'To distribute incoming network traffic across multiple servers',
              'To encrypt data in transit',
              'To compress HTTP responses'
            ],
            correctAnswer: 1,
            explanation: 'A load balancer ensures no single server bears too much demand, improving responsiveness and availability.'
          },
          {
            id: 'sd3',
            question: 'What is the difference between vertical scaling and horizontal scaling?',
            options: [
              'Vertical means adding more servers; Horizontal means upgrading existing servers',
              'Vertical means upgrading existing servers; Horizontal means adding more servers',
              'Vertical scales databases; Horizontal scales application servers',
              'There is no difference'
            ],
            correctAnswer: 1,
            explanation: 'Vertical scaling (scale up) means adding more power (CPU, RAM). Horizontal scaling (scale out) means adding more machines.'
          }
        ]
      },
      {
        id: 'distributed',
        title: 'Distributed Systems & Patterns',
        questions: [
          {
            id: 'sd2',
            question: 'What does a CDN (Content Delivery Network) do?',
            options: [
              'Manages database transactions',
              'Compiles code on the server',
              'Caches static content at edge servers close to users',
              'Defends against SQL injection attacks'
            ],
            correctAnswer: 2,
            explanation: 'CDNs store cached versions of your content in multiple geographical locations to serve users faster based on their location.'
          },
          {
            id: 'sd4',
            question: 'In the CAP theorem, what does "P" stand for?',
            options: ['Performance', 'Partition Tolerance', 'Persistence', 'Portability'],
            correctAnswer: 1,
            explanation: 'CAP stands for Consistency, Availability, and Partition tolerance.'
          },
          {
            id: 'sd5',
            question: 'What is the main advantage of a microservices architecture over a monolith?',
            options: [
              'It is easier to deploy initially',
              'It requires less infrastructure',
              'It allows independent deployment and scaling of different components',
              'It eliminates the need for APIs'
            ],
            correctAnswer: 2,
            explanation: 'Microservices allow teams to develop, deploy, and scale specific services independently without affecting the entire application.'
          }
        ]
      }
    ]
  }
];
