export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Module {
  id: string;
  title: string;
  content: string; // Markdown or raw text
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Course {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: Module[];
  assignment: {
    id: string;
    title: string;
    passingScore: number;
    questions: Question[];
  }
}

export const categoriesData: Category[] = [
  {
    id: "bootcamps",
    name: "Bootcamp Curriculums",
    description: "Exclusive intensive bootcamp tracks."
  }
];

export const coursesData: Course[] = [
  {
    id: "full-stack",
    categoryId: "bootcamps",
    title: "Full Stack Development Masterclass",
    description: "Master frontend engineering, robust backend APIs, relational & NoSQL databases, and full deployment pipelines.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    modules: [
      {
        id: "fs-mod-1",
        title: "Module 1 — Web Fundamentals (HTML5)",
        content: `
# Web Fundamentals (HTML5)

### Key Topics:
- Internet & Web architecture basics
- Semantic HTML tags and structure
- Forms, inputs, and validation
- Meta tags and SEO fundamentals
- Web Accessibility (a11y) basics
- Audio, video, and media embedding

### Practical / Deliverable:
Mini Project: Semantic HTML Portfolio
        `
      },
      {
        id: "fs-mod-2",
        title: "Module 2 — Modern CSS3 & Layouts",
        content: `
# Modern CSS3 & Layouts

### Key Topics:
- CSS Box Model and selectors
- Positioning (static, relative, absolute, fixed)
- Flexbox for 1D layouts
- CSS Grid for 2D layouts
- Media queries and responsive design
- CSS transitions and basic animations

### Practical / Deliverable:
Mini Project: Responsive Landing Page
        `
      },
      {
        id: "fs-mod-3",
        title: "Module 3 — Advanced CSS & Tailwind",
        content: `
# Advanced CSS & Tailwind

### Key Topics:
- CSS Variables and custom properties
- SASS/SCSS fundamentals
- Utility-first CSS with Tailwind CSS
- Tailwind configuration and theming
- Advanced responsive patterns
- Dark mode implementation

### Practical / Deliverable:
Hands-on: Clone a modern dashboard UI using Tailwind CSS
        `
      },
      {
        id: "fs-mod-4",
        title: "Module 4 — JavaScript Core Concepts",
        content: `
# JavaScript Core Concepts

### Key Topics:
- Variables, Data Types, and Operators
- Control flow (if/else, loops, switch)
- Functions and scopes
- Arrays and Objects
- The DOM (Document Object Model)
- Event listeners and handling
- LocalStorage and SessionStorage

### Practical / Deliverable:
Mini Project: Interactive Todo List app
        `
      },
      {
        id: "fs-mod-1-5",
        title: "Module 5 — Modern JavaScript (ES6+)",
        content: `
# Modern JavaScript (ES6+)

### Key Topics:
- Let and Const
- Arrow functions and lexical 'this'
- Destructuring, Rest, and Spread operators
- Template literals
- Array methods (map, filter, reduce)
- Promises, async/await, and the event loop
- Fetch API

### Practical / Deliverable:
Mini Project: Weather App using a 3rd party API
        `
      },
      {
        id: "fs-mod-1-6",
        title: "Module 6 — Advanced JS Architecture",
        content: `
# Advanced JS Architecture

### Key Topics:
- Closures and lexical scoping
- Prototypal inheritance and Classes
- JavaScript modules (ESM)
- Error handling (try/catch)
- Object-Oriented vs Functional Programming
- JavaScript design patterns

### Practical / Deliverable:
Hands-on: Build a vanilla JS SPA router
        `
      },
      {
        id: "fs-mod-1-7",
        title: "Module 7 — React.js Fundamentals",
        content: `
# React.js Fundamentals

### Key Topics:
- Why React? Virtual DOM concept
- JSX syntax and Babel
- Functional components and Props
- React Hooks: useState and useEffect
- Handling events in React
- Rendering lists and keys
- Conditional rendering

### Practical / Deliverable:
Mini Project: React Movie Search App
        `
      },
      {
        id: "fs-mod-1-8",
        title: "Module 8 — Advanced React Patterns",
        content: `
# Advanced React Patterns

### Key Topics:
- Custom hooks architecture
- Context API for state sharing
- useReducer for complex state
- useRef and DOM access
- Higher-Order Components (HOC)
- Error Boundaries
- React Portals

### Practical / Deliverable:
Hands-on: Refactor an app to use Context and Custom Hooks
        `
      },
      {
        id: "fs-mod-1-9",
        title: "Module 9 — Global State Management",
        content: `
# Global State Management

### Key Topics:
- Why global state matters
- Redux fundamentals (Actions, Reducers, Store)
- Redux Toolkit (RTK) setup
- RTK Query for data fetching
- Zustand as a lightweight alternative
- Handling async state and thunks

### Practical / Deliverable:
Mini Project: E-commerce Cart with Redux Toolkit
        `
      },
      {
        id: "fs-mod-1-10",
        title: "Module 10 — React Router & Navigation",
        content: `
# React Router & Navigation

### Key Topics:
- Client-side routing concepts
- React Router v6+ setup
- Dynamic routes and URL parameters
- Nested routing and Layouts
- Programmatic navigation
- Route protection and Auth wrappers

### Practical / Deliverable:
Hands-on: Multi-page Dashboard with protected routes
        `
      },
      {
        id: "fs-mod-1-11",
        title: "Module 11 — Frontend Testing",
        content: `
# Frontend Testing

### Key Topics:
- Unit testing vs Integration testing
- Jest setup and mocking
- React Testing Library fundamentals
- Testing hooks and components
- End-to-End (E2E) testing with Cypress
- Test-Driven Development (TDD) basics

### Practical / Deliverable:
Deliverable: Write a test suite for a React application
        `
      },
      {
        id: "fs-mod-1-12",
        title: "Module 12 — Next.js & Server-Side Rendering",
        content: `
# Next.js & Server-Side Rendering

### Key Topics:
- CSR vs SSR vs SSG architectures
- Next.js App Router (app directory)
- React Server Components (RSC)
- Next.js data fetching strategies
- Dynamic metadata and SEO
- Next API routes

### Practical / Deliverable:
Mini Project: SEO-friendly Blog with Next.js
        `
      },
      {
        id: "fs-mod-1-13",
        title: "Module 13 — Performance Optimization",
        content: `
# Performance Optimization

### Key Topics:
- Core Web Vitals (LCP, FID, CLS)
- Code splitting and lazy loading (React.lazy)
- Image optimization techniques
- Memoization (useMemo, useCallback, React.memo)
- Debouncing and throttling
- Lighthouse auditing

### Practical / Deliverable:
Hands-on: Audit and optimize an underperforming React app
        `
      },
      {
        id: "fs-mod-1-14",
        title: "Module 14 — Frontend DevOps & Build Tools",
        content: `
# Frontend DevOps & Build Tools

### Key Topics:
- Bundlers deep dive: Vite vs Webpack
- Environment variables in React/Next
- CI/CD pipelines (GitHub Actions)
- Deploying to Vercel and Netlify
- TypeScript strict mode configuration
- Monorepos (Turborepo) basics

### Practical / Deliverable:
Integration: Deploy a production-ready Next.js frontend
        `
      },
      {
        id: "fs-mod-5",
        title: "Module 1 — Backend Fundamentals",
        content: `
# Backend Fundamentals

### Key Topics:
- Introduction to backend development
- Frontend vs backend responsibilities
- Client-server architecture
- Request-response lifecycle
- HTTP and HTTPS
- HTTP methods: GET, POST, PUT, PATCH, DELETE
- HTTP status codes: 2xx, 4xx, 5xx
- Headers, request body, query parameters and route parameters
- JSON and REST API concepts
- Introduction to Postman

### Practical / Deliverable:
Mini Project: Student Management API
        `
      },
      {
        id: "fs-mod-6",
        title: "Module 2 — JavaScript & Node.js for Backend",
        content: `
# JavaScript & Node.js for Backend

### Key Topics:
- Node.js runtime and use cases
- Installing Node.js and using npm
- package.json and dependencies
- Modules and imports
- Callbacks, Promises and async/await
- Asynchronous programming
- Error handling
- Environment variables and process.env
- Creating a basic Node.js HTTP server

### Practical / Deliverable:
Hands-on: Build a basic Node.js server without Express
        `
      },
      {
        id: "fs-mod-7",
        title: "Module 3 — Express.js",
        content: `
# Express.js

### Key Topics:
- Express application setup
- Routes and routers
- Request and response objects
- Route parameters and query parameters
- Middleware
- Custom middleware
- Controllers
- Error-handling middleware
- REST API structure
- HTTP response handling

### Practical / Deliverable:
Mini Project: Book Management REST API
        `
      },
      {
        id: "fs-mod-8",
        title: "Module 4 — MongoDB & Mongoose",
        content: `
# MongoDB & Mongoose

### Key Topics:
- Database fundamentals
- SQL vs NoSQL overview
- MongoDB databases, collections and documents
- BSON basics
- MongoDB Atlas & Compass
- Mongoose setup
- Schemas and models
- CRUD operations
- Basic relationships and references

### Practical / Deliverable:
Project Milestone: Connect Express API to MongoDB
        `
      },
      {
        id: "fs-mod-9",
        title: "Module 5 — Backend Project Architecture",
        content: `
# Backend Project Architecture

### Key Topics:
- Why project architecture matters
- Routes, controllers, services and models
- Middleware and utilities
- Configuration management
- Environment-specific configuration
- Reusable functions
- Standard API response formats
- Centralized error handling
- Clean and maintainable backend structure

### Practical / Deliverable:
Hands-on: Refactor an existing API into a production-style structure
        `
      },
      {
        id: "fs-mod-10",
        title: "Module 6 — Authentication & Authorization",
        content: `
# Authentication & Authorization

### Key Topics:
- Authentication vs authorization
- User registration & Login flow
- Password hashing with bcrypt
- JWT fundamentals & Access tokens
- Authentication middleware
- Protected routes
- Role-based authorization
- Admin, user and other role permissions
- Introduction to refresh tokens

### Practical / Deliverable:
Mini Project: Authentication & Role-Based Access API
        `
      },
      {
        id: "fs-mod-11",
        title: "Module 7 — Validation, Error Handling & Security",
        content: `
# Validation, Error Handling & Security

### Key Topics:
- Why backend validation is necessary
- Request validation (Required fields and data types)
- Email and password validation
- Joi / Zod / express-validator overview
- Consistent error responses
- CORS, Helmet, and Rate limiting
- Secure environment variables
- Common API security risks

### Practical / Deliverable:
Hands-on: Secure and validate an existing API
        `
      },
      {
        id: "fs-mod-12",
        title: "Module 8 — Advanced REST API Development",
        content: `
# Advanced REST API Development

### Key Topics:
- Search, Filtering, Sorting, Pagination
- Combining multiple query parameters
- API response design
- API versioning concepts
- Database indexing basics
- Efficient database queries

### Practical / Deliverable:
Hands-on: Product/Job API with search, filters and pagination
        `
      },
      {
        id: "fs-mod-13",
        title: "Module 9 — File Uploads & External Services",
        content: `
# File Uploads & External Services

### Key Topics:
- Multipart/form-data
- File uploads using Multer
- Image and document handling
- Cloud storage concepts (Cloudinary / AWS S3 overview)
- Third-party API integration
- API keys and secure configuration

### Practical / Deliverable:
Hands-on: Profile image or resume upload API
        `
      },
      {
        id: "fs-mod-14",
        title: "Module 10 — Email & Real-World Backend Workflows",
        content: `
# Email & Real-World Backend Workflows

### Key Topics:
- Sending emails from a backend
- Nodemailer
- Email verification
- Password reset workflow
- OTP concepts
- Notifications
- Background jobs introduction

### Practical / Deliverable:
Hands-on: Email verification or password reset workflow
        `
      },
      {
        id: "fs-mod-15",
        title: "Module 11 — API Testing & Documentation",
        content: `
# API Testing & Documentation

### Key Topics:
- Postman collections & Environment variables
- Testing successful and failed requests
- Unit testing & Integration testing concepts
- Jest & Supertest overview
- Swagger/OpenAPI introduction
- Writing useful API documentation

### Practical / Deliverable:
Deliverable: Tested and documented API collection
        `
      },
      {
        id: "fs-mod-16",
        title: "Module 12 — Git & Team Development",
        content: `
# Git & Team Development

### Key Topics:
- Git fundamentals (Repositories and commits)
- Branches, Feature branches, and Pull requests
- Merge conflicts
- .gitignore
- Environment files and secrets
- GitHub collaboration workflow
- Code review basics

### Practical / Deliverable:
Team Exercise: Develop features using branches and pull requests
        `
      },
      {
        id: "fs-mod-17",
        title: "Module 13 — Deployment & Production",
        content: `
# Deployment & Production

### Key Topics:
- Development vs production environments
- Environment variables in production
- Deploying Node/Express applications
- MongoDB Atlas production connection
- CORS configuration
- HTTPS and domain basics
- Application logs & Debugging production issues
- Basic AWS EC2 introduction

### Practical / Deliverable:
Deliverable: Deploy a working backend API
        `
      },
      {
        id: "fs-mod-18",
        title: "Module 14 — Frontend & Backend Integration",
        content: `
# Frontend & Backend Integration

### Key Topics:
- React-to-API communication
- Axios and Fetch
- Sending JSON data
- Authentication headers
- Protected frontend routes
- Handling loading and error states
- Login/logout flow
- CRUD integration
- CORS troubleshooting

### Practical / Deliverable:
Integration: Connect the backend with the frontend team's React application
        `
      }
    ],
    assignment: {
      id: "fs-final",
      title: "Full Stack Final Project",
      passingScore: 80,
      questions: [
        {
          id: "q1",
          text: "Which of the following is true about React Server Components?",
          options: ["They can use useState", "They ship zero JavaScript to the client by default", "They replace the need for an API", "They run on the client"],
          correctAnswer: 1
        }
      ]
    }
  },
  {
    id: "data-engineering",
    categoryId: "bootcamps",
    title: "Data Engineering Masterclass",
    description: "Design and build enterprise-grade data pipelines, real-time analytics streaming, and scalable data warehouses.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    modules: [
      {
        id: "de-mod-1",
        title: "ETL Pipelines with Airflow & dbt",
        content: `
# ETL/ELT Pipelines

Learn how to extract, transform, and load massive amounts of data efficiently.

### Key Topics:
- **Apache Airflow:** Scheduling and orchestrating complex data workflows via DAGs.
- **dbt (Data Build Tool):** Transforming data directly inside your warehouse using modular SQL.
- **Data Quality:** Implementing automated testing for data freshness and accuracy.
        `
      },
      {
        id: "de-mod-2",
        title: "Data Warehousing (Snowflake/BigQuery)",
        content: `
# Data Warehousing

Explore the architecture of modern columnar databases.

### Key Topics:
- **Schema Design:** Star schema vs Snowflake schema.
- **Compute vs Storage:** Understanding modern warehouse architecture and cost optimization.
- **Partitioning:** Optimizing query performance on large datasets.
        `
      },
      {
        id: "de-mod-3",
        title: "Distributed Data Processing (Kafka/Spark)",
        content: `
# Distributed Data Processing

Handle massive data streams in real-time.

### Key Topics:
- **Apache Kafka:** Event streaming and pub-sub architecture.
- **Apache Spark:** Distributed data processing for big data.
- **Stream Processing:** Processing data as it arrives instead of in batches.
        `
      },
      {
        id: "de-mod-4",
        title: "Advanced SQL Analytics",
        content: `
# Advanced SQL Analytics

Go beyond basic CRUD and learn analytical SQL.

### Key Topics:
- **Window Functions:** Running totals, rankings, and moving averages.
- **CTEs:** Common Table Expressions for complex query structuring.
- **Performance Tuning:** EXPLAIN plans and query optimization.
        `
      }
    ],
    assignment: {
      id: "de-final",
      title: "Data Engineering Final Project",
      passingScore: 80,
      questions: [
        {
          id: "q1",
          text: "What is the primary function of Apache Airflow?",
          options: ["Storing raw data", "Visualizing dashboards", "Orchestrating and scheduling workflows", "Streaming real-time events"],
          correctAnswer: 2
        }
      ]
    }
  },
  {
    id: "solutions-architecture",
    categoryId: "bootcamps",
    title: "Solutions Architecture Masterclass",
    description: "Architect resilient, cost-effective, and highly scalable cloud systems following industry-proven frameworks.",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    modules: [
      {
        id: "sa-mod-1",
        title: "Cloud System Design (AWS)",
        content: `
# Cloud System Design

Learn how to design highly available, fault-tolerant systems on AWS.

### Key Topics:
- **Networking:** VPCs, Subnets, Internet Gateways, and Route 53.
- **Compute:** EC2 Autoscaling, ECS, and EKS (Kubernetes).
- **Storage:** S3 tiers, EBS, and EFS lifecycle policies.
- **Well-Architected Framework:** The 6 pillars of cloud architecture.
        `
      },
      {
        id: "sa-mod-2",
        title: "Event-Driven & Serverless Patterns",
        content: `
# Event-Driven Architecture

Shift from synchronous APIs to asynchronous event-driven systems.

### Key Topics:
- **Event Bus vs Queues:** SNS, SQS, and EventBridge.
- **Serverless Compute:** AWS Lambda and API Gateway.
- **Saga Pattern:** Managing distributed transactions across microservices.
        `
      },
      {
        id: "sa-mod-3",
        title: "High Availability & Disaster Recovery",
        content: `
# High Availability & DR

Design systems that survive massive failures.

### Key Topics:
- **Multi-Region Active-Active:** Designing for zero downtime.
- **RTO & RPO:** Calculating Recovery Time Objective and Recovery Point Objective.
- **Database Replication:** Read replicas, multi-master setups, and backups.
        `
      },
      {
        id: "sa-mod-4",
        title: "Enterprise Security & FinOps",
        content: `
# Security & Cost Management

Secure your infrastructure and optimize cloud spending.

### Key Topics:
- **IAM & RBAC:** Principle of least privilege.
- **Network Security:** WAF, Shield, and GuardDuty.
- **FinOps:** Tagging, cost allocation, and reserved instances.
        `
      }
    ],
    assignment: {
      id: "sa-final",
      title: "Solutions Architecture Final Project",
      passingScore: 80,
      questions: [
        {
          id: "q1",
          text: "Which AWS service is best suited for decoupling microservices via message queuing?",
          options: ["AWS S3", "Amazon SQS", "Amazon EC2", "Amazon RDS"],
          correctAnswer: 1
        }
      ]
    }
  }
];
