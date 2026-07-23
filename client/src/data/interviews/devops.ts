import type { InterviewModule } from './types';

export const devopsModule: InterviewModule = {
  id: "devops",
  title: "DevOps Engineer",
  branch: "cs_it",
  category: "Data & Infrastructure",
  description: "CI/CD, Docker, Kubernetes, cloud infrastructure, and deployment.",
  icon: "database",
  color: "bg-slate-50 border-slate-300 hover:border-slate-600",
  accent: "slate",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share what inspired you to pursue DevOps and Cloud Infrastructure.",
      "Walk me through a CI/CD pipeline or cloud migration project you built.",
      "How do you handle high-pressure production incidents when critical services go down?",
      "How do you advocate for DevOps culture and automation in teams used to manual deployments?"
    ],
    techDomain: [
      "Explain the difference between Continuous Integration (CI) and Continuous Deployment (CD).",
      "How do Docker containers differ from Virtual Machines (VMs) in terms of kernel sharing & isolation?",
      "What are Kubernetes Pods, Deployments, Services, and Ingress controllers?",
      "Compare Blue-Green deployment strategy versus Canary releases and rolling updates.",
      "What is Infrastructure as Code (IaC) and how does Terraform manage state locking?",
      "How do you securely manage production secrets and API keys using Vault or AWS Secrets Manager?"
    ],
    managerial: [
      "Describe a post-mortem review you led after a production outage and the action items created.",
      "How do you balance developer deployment velocity with cloud security and compliance controls?"
    ]
  },

  skills: [
    {
      id: "cicd",
      title: "CI/CD Pipelines",
      questions: [
        "What is the difference between continuous integration and continuous deployment (CI/CD)?",
        "Explain a typical CI/CD workflow for deploying a microservice.",
        "How do you handle database migrations safely inside an automated deployment pipeline?",
        "What is Infrastructure as Code (IaC)? Give an example of a tool you use for this.",
        "How do you manage secrets and API keys in an automated pipeline?"
      ]
    },
    {
      id: "containers",
      title: "Containerization & K8s",
      questions: [
        "Explain the core differences between virtual machines (VMs) and Docker containers.",
        "How does Kubernetes handle container orchestration and auto-scaling?",
        "What are Kubernetes Pods, Deployments, and Services?",
        "How do you optimize a Docker image for production to keep it small and secure?",
        "Explain the concept of a service mesh like Istio."
      ]
    },
    {
      id: "monitoring",
      title: "Cloud & Monitoring",
      questions: [
        "How would you monitor and debug a production application that suddenly goes down?",
        "Explain the difference between scaling vertically vs scaling horizontally.",
        "What is Blue-Green deployment, and how does it compare to Canary releases?",
        "How do you set up highly available architecture across multiple availability zones?",
        "What key metrics (SLIs/SLOs) do you monitor to ensure system reliability?"
      ]
    }
  ]
};
