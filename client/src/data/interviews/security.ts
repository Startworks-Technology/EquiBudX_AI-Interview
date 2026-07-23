import type { InterviewModule } from './types';

export const securityModule: InterviewModule = {
  id: "security",
  title: "Cybersecurity Engineer",
  branch: "cs_it",
  category: "Specialized / Advanced Roles",
  description: "Penetration testing, OWASP, Encryption, and Auth systems.",
  icon: "file-type",
  color: "bg-red-50 border-red-200 hover:border-red-500",
  accent: "red",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share what inspired you to specialize in Cybersecurity and Application Defense.",
      "Walk me through a vulnerability assessment or penetration test report you completed.",
      "How do you handle security awareness when non-technical staff accidentally breach policy?"
    ],
    techDomain: [
      "Explain the difference between Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF).",
      "What is SQL Injection (SQLi) and how do prepared statements / parameterized queries eliminate it?",
      "Explain Symmetric vs Asymmetric encryption and how SSL/TLS handshake uses both.",
      "Why is password hashing with bcrypt/Argon2 + salt necessary over simple MD5/SHA256?",
      "What is the Principle of Least Privilege (PoLP) and how do you audit IAM permissions?"
    ],
    managerial: [
      "Describe how you conducted incident response during a zero-day vulnerability outbreak."
    ]
  },

  skills: [
    {
      id: "app-security",
      title: "Application Security (OWASP)",
      questions: [
        "Explain the difference between Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF). How do you prevent them?",
        "What is SQL injection, and what are the best practices for preventing it in a web application?",
        "How do you prevent Server-Side Request Forgery (SSRF) vulnerabilities?",
        "What is Insecure Direct Object Reference (IDOR), and how can it be mitigated?",
        "Explain how Content Security Policy (CSP) headers protect web applications."
      ]
    },
    {
      id: "encryption",
      title: "Encryption & Cryptography",
      questions: [
        "Explain the difference between symmetric and asymmetric encryption. Give an example of when to use each.",
        "How would you securely store user passwords in a database? Explain the role of hashing and salting.",
        "Explain how Public Key Infrastructure (PKI) and SSL/TLS certificates work.",
        "What is the difference between encoding, encrypting, and hashing?",
        "How do you securely manage and rotate cryptographic keys in a cloud environment?"
      ]
    },
    {
      id: "auth",
      title: "Authentication & Authorization",
      questions: [
        "What is the Principle of Least Privilege (PoLP) and why is it critical in cloud architecture?",
        "Explain the OAuth 2.0 authorization code grant flow.",
        "What are the security implications of using JSON Web Tokens (JWT) for session management?",
        "How do you implement secure Multi-Factor Authentication (MFA)?",
        "Describe Role-Based Access Control (RBAC) vs Attribute-Based Access Control (ABAC)."
      ]
    }
  ]
};
