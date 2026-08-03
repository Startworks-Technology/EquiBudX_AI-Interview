import type { Course } from '../types';

export const htmlCourse: Course = {
  id: "html-masterclass",
  categoryId: "frontend",
  title: "HTML5",
  description: "Learn HTML5 semantic markup, structure, forms, accessibility (a11y), media elements, and modern web standards.",
  thumbnail: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80",
  modules: [
    {
      id: "html-mod-1-intro",
      title: "1. HTML Basics & Document Structure",
      content: `## Introduction to HTML5

### What is HTML?
HTML (HyperText Markup Language) is the standard markup language for creating Web pages. It describes the structure of a Web page semantically.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EquiBudX Learning</title>
</head>
<body>
    <h1>Welcome to Web Development</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
\`\`\`
`
    },
    {
      id: "html-mod-2-semantic-tags",
      title: "2. Semantic HTML5 & Structure",
      content: `## Semantic HTML5 Elements

Semantic HTML means using elements that clearly describe their meaning to both the browser and developer:

* \`<header>\`: Introductory content or navigation links
* \`<nav>\`: Set of navigation links
* \`<main>\`: Dominant content of the \`<body>\`
* \`<article>\`: Self-contained composition (blog post, news story)
* \`<section>\`: Standalone section of functionality
* \`<aside>\`: Content indirectly related to main content (sidebar)
* \`<footer>\`: Footer of a document or section

\`\`\`html
<main>
    <article>
        <h2>Understanding Semantic Web</h2>
        <p>Semantic tags improve accessibility and SEO.</p>
    </article>
</main>
\`\`\`
`
    },
    {
      id: "html-mod-3-forms-inputs",
      title: "3. Forms, Validation & Inputs",
      content: `## HTML Forms

HTML forms collect user input:

\`\`\`html
<form action="/submit" method="POST">
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com">

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required minlength="8">

    <button type="submit">Log In</button>
</form>
\`\`\`
`
    }
  ],
  assignment: {
    id: "html-assignment-1",
    title: "HTML5 Fundamentals Certification Quiz",
    passingScore: 80,
    questions: [
      {
        id: "html-q1",
        text: "Which HTML5 element represents the main dominant content of a document?",
        options: ["<section>", "<main>", "<article>", "<content>"],
        correctAnswer: 1
      },
      {
        id: "html-q2",
        text: "What declaration is required at the very top of an HTML5 document?",
        options: ["<!DOCTYPE html>", "<html>", "<head>", "<meta charset='UTF-8'>"],
        correctAnswer: 0
      },
      {
        id: "html-q3",
        text: "Which input type provides automatic email validation in browsers?",
        options: ["type='text'", "type='email'", "type='mail'", "type='validate'"],
        correctAnswer: 1
      }
    ]
  }
};
