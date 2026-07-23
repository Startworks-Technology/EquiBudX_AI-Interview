import type { InterviewModule } from './types';

export const frontendModule: InterviewModule = {
  id: "frontend",
  title: "Frontend Engineer",
  branch: "cs_it",
  category: "Core Software Engineering",
  description: "UI/UX, React, JavaScript, state management, and web performance.",
  icon: "code",
  color: "bg-blue-50 border-blue-200 hover:border-blue-500",
  accent: "blue",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share what inspired you to specialize in Frontend web development.",
      "Walk me through the most impressive web UI project on your resume.",
      "How do you stay up-to-date with evolving web technologies like React, Next.js, and CSS frameworks?",
      "Describe a time when you received constructive feedback on code quality and how you handled it."
    ],
    techDomain: [
      "Explain the Virtual DOM in React and why it optimizes real DOM updates.",
      "What is closure in JavaScript and how do you use it in real applications?",
      "How do you handle state management across large-scale frontend applications?",
      "What are Core Web Vitals, and how do you optimize web page performance and initial load time?",
      "Explain the difference between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)."
    ],
    managerial: [
      "Describe a conflict between frontend design expectations and backend API limitations and how you resolved it.",
      "How do you prioritize web accessibility (a11y) and responsive design under tight project deadlines?"
    ]
  },

  skills: [
    {
      id: "react-core",
      title: "React Core & Hooks",
      questions: [
        "Explain the virtual DOM in React and why it is more efficient than manipulating the real DOM.",
        "What is 'prop drilling' in React, and what are the different ways you can prevent it?",
        "Explain the difference between useEffect and useLayoutEffect.",
        "How do you handle complex state management in a large React application?",
        "What are React Server Components and how do they differ from SSR?"
      ]
    },
    {
      id: "js-fundamentals",
      title: "JavaScript Fundamentals",
      questions: [
        "Explain the event loop in JavaScript. How does it handle asynchronous operations?",
        "What is a closure in JavaScript? Give a practical example of when you would use one.",
        "Explain the concept of prototypal inheritance.",
        "What is the difference between null, undefined, and undeclared variables?",
        "How does the 'this' keyword work, and how can it be explicitly bound?"
      ]
    },
    {
      id: "web-performance",
      title: "Web Performance & Optimization",
      questions: [
        "How would you optimize the loading time and performance of a heavy React application?",
        "Explain the concept of Code Splitting and Lazy Loading.",
        "What are Core Web Vitals, and why do they matter?",
        "How do you optimize images and assets for the web?",
        "Explain the differences between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)."
      ]
    }
  ]
};
