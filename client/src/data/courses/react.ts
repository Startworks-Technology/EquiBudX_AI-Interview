import type { Course } from '../types';

export const reactCourse: Course = {
  id: "react-masterclass",
  categoryId: "frontend",
  title: "React",
  description: "Build modern, interactive user interfaces using React components, Hooks, State Management, Router, and Context API.",
  thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
  modules: [
    {
      id: "react-mod-1-intro",
      title: "1. Introduction to React & JSX",
      content: `## Introduction to React

### What is React?
React is an open-source JavaScript library developed by Meta for building component-based user interfaces.

### Core Benefits:
* **Declarative UI**: Design simple views for each state in your application.
* **Component-Based**: Build encapsulated components that manage their own state.
* **Virtual DOM**: React updates and renders only the right components when data changes.

### Understanding JSX
JSX allows writing HTML-like tags inside JavaScript files:

\`\`\`jsx
function WelcomeHeader({ username }) {
  return (
    <header className="welcome-banner">
      <h1>Hello, {username}!</h1>
      <p>Welcome back to MockMate.</p>
    </header>
  );
}
\`\`\`
`
    },
    {
      id: "react-mod-2-components-props",
      title: "2. Components & Props",
      content: `## React Components & Props

### Functional Components
Functional components are JavaScript functions that return JSX markup.

\`\`\`jsx
function Button({ label, onClick, variant = 'primary' }) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
\`\`\`

### Props & Unidirectional Data Flow
Props are passed down from parent components to child components and are immutable inside the child.
`
    },
    {
      id: "react-mod-3-state-hooks",
      title: "3. State Management & Hooks",
      content: `## React State & Hooks

### useState Hook
\`useState\` lets you add local state to functional components.

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-4 items-center">
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
\`\`\`

### useEffect Hook
\`useEffect\` allows performing side effects like fetching data, subscriptions, or DOM updates.

\`\`\`jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]);

  if (!user) return <p>Loading user...</p>;
  return <div>{user.name}</div>;
}
\`\`\`
`
    },
    {
      id: "react-mod-4-context-router",
      title: "4. Context API & React Router",
      content: `## Global State & Client Routing

### Context API
Context provides a way to pass data through the component tree without having to pass props manually at every level.

\`\`\`jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
\`\`\`

### React Router
Manage navigation between views in a Single Page Application (SPA).
`
    }
  ],
  assignment: {
    id: "react-assignment-1",
    title: "React Developer Certification Quiz",
    passingScore: 80,
    questions: [
      {
        id: "react-q1",
        text: "What Hook is used to manage local component state in React?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correctAnswer: 1
      },
      {
        id: "react-q2",
        text: "How do you pass data down from a parent component to a child component?",
        options: ["Using State", "Using Props", "Using Redux", "Using Render Props"],
        correctAnswer: 1
      },
      {
        id: "react-q3",
        text: "What does the Virtual DOM do in React?",
        options: [
          "Directly modifies the browser DOM on every frame",
          "Calculates minimal DOM diffs to update only modified nodes efficiently",
          "Replaces HTML entirely with WebGL",
          "Executes backend database queries"
        ],
        correctAnswer: 1
      },
      {
        id: "react-q4",
        text: "When does the dependency array `[]` in `useEffect` cause the effect to run?",
        options: ["On every render", "Only once when the component mounts", "Never", "On component unmount only"],
        correctAnswer: 1
      }
    ]
  }
};
