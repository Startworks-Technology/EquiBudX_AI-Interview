import type { InterviewModule } from './types';

export const aiModule: InterviewModule = {
  id: "ai-engineer",
  title: "Machine Learning Engineer",
  branch: "ai_ds",
  category: "AI & Data Science",
  description: "LLMs, Neural Networks, PyTorch, RAG, and MLOps deployment.",
  icon: "atom",
  color: "bg-cyan-50 border-cyan-200 hover:border-cyan-500",
  accent: "cyan",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and describe your journey into Machine Learning & AI engineering.",
      "Walk me through an ML model or AI application you designed and trained.",
      "How do you stay abreast of rapid advancements in LLMs, GenAI, and Deep Learning research?"
    ],
    techDomain: [
      "Explain the Bias-Variance tradeoff and techniques to prevent overfitting in deep models.",
      "How does Retrieval-Augmented Generation (RAG) work, and how do vector databases compute semantic similarity?",
      "Explain the Transformer architecture (Self-Attention mechanism) vs traditional RNNs.",
      "How do you evaluate model metrics (Precision, Recall, ROC-AUC, F1-Score) for imbalanced data?",
      "What are the best practices for deploying PyTorch / TensorFlow models into production (MLOps)?"
    ],
    managerial: [
      "Describe a scenario where a machine learning model failed in production or exhibited drift, and how you fixed it."
    ]
  },

  skills: [
    {
      id: "ml-core",
      title: "Machine Learning Core",
      questions: [
        "Explain the difference between supervised, unsupervised, and reinforcement learning.",
        "What is overfitting in a machine learning model, and how can you prevent it?",
        "What is the difference between classification and regression tasks? Give an example of each.",
        "How do you evaluate the performance of a machine learning model? Explain metrics like accuracy, precision, and recall.",
        "Explain the Bias-Variance tradeoff in machine learning."
      ]
    },
    {
      id: "llms",
      title: "Large Language Models (LLMs)",
      questions: [
        "Explain how Large Language Models (LLMs) like GPT-4 process and generate text.",
        "What is Retrieval-Augmented Generation (RAG) and why is it useful?",
        "How do you handle context window limitations when working with LLM APIs?",
        "Explain the concept of Fine-Tuning vs Prompt Engineering.",
        "What is a vector database, and how does semantic search work with text embeddings?"
      ]
    },
    {
      id: "neural-nets",
      title: "Deep Learning & Neural Networks",
      questions: [
        "Explain what a Convolutional Neural Network (CNN) is and where it is typically used.",
        "What is the purpose of an activation function? Name a few common ones.",
        "Explain the concept of backpropagation in training a neural network.",
        "How do Recurrent Neural Networks (RNNs) differ from Feedforward Neural Networks?",
        "What is the vanishing gradient problem, and how do architectures like LSTMs or ResNets solve it?"
      ]
    }
  ]
};
