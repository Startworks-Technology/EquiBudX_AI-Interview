import type { InterviewModule } from './types';

export const qaModule: InterviewModule = {
  id: "qa",
  title: "QA Automation Engineer",
  branch: "cs_it",
  category: "Specialized / Advanced Roles",
  description: "Cypress, Jest, TDD, and End-to-end testing.",
  icon: "file-type",
  color: "bg-lime-50 border-lime-200 hover:border-lime-500",
  accent: "lime",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share your experience with manual and automated software testing.",
      "Walk me through a test automation framework or suite you designed.",
      "How do you advocate for test coverage when developers want to ship features without tests?"
    ],
    techDomain: [
      "Explain the Testing Pyramid (Unit vs Integration vs E2E tests).",
      "What is Test-Driven Development (TDD) and the Red-Green-Refactor cycle?",
      "Explain the Page Object Model (POM) design pattern in Cypress/Selenium automation.",
      "How do you debug and eliminate flaky tests in CI/CD build pipelines?",
      "Explain the difference between Load, Stress, and Endurance performance testing."
    ],
    managerial: [
      "Describe a scenario where a critical bug slipped into production despite automated test suites passing."
    ]
  },

  skills: [
    {
      id: "testing-core",
      title: "Testing Fundamentals",
      questions: [
        "Explain the Testing Pyramid. What is the difference between Unit, Integration, and E2E tests?",
        "What is Test-Driven Development (TDD)? Walk me through the TDD lifecycle.",
        "Explain the concept of mocking and stubbing in unit tests. When should you mock a dependency?",
        "What is Behavior-Driven Development (BDD) and how does it relate to tools like Cucumber?",
        "How do you determine what code is worth writing automated tests for versus testing manually?"
      ]
    },
    {
      id: "automation",
      title: "Test Automation Frameworks",
      questions: [
        "How would you design a test automation framework from scratch for a new web application?",
        "How do you handle flaky tests in an automated test suite?",
        "Explain the Page Object Model (POM) design pattern in test automation.",
        "How do you manage test data for automated end-to-end tests?",
        "What are the pros and cons of using Cypress compared to Selenium?"
      ]
    },
    {
      id: "cicd-testing",
      title: "CI/CD & Performance Testing",
      questions: [
        "How do you integrate automated test suites into a CI/CD pipeline?",
        "Explain the difference between load testing, stress testing, and endurance testing.",
        "How would you approach testing a microservices architecture?",
        "What strategies do you use to speed up a massive automated test suite that takes hours to run?",
        "How do you test third-party API integrations without hitting the real API during every test run?"
      ]
    }
  ]
};
