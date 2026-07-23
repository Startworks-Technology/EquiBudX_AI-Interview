import type { InterviewModule } from './types';

export const mobileModule: InterviewModule = {
  id: "mobile",
  title: "Mobile Developer",
  branch: "cs_it",
  category: "Core Software Engineering",
  description: "React Native, iOS/Android, Mobile UI, and App Store guidelines.",
  icon: "code",
  color: "bg-pink-50 border-pink-200 hover:border-pink-500",
  accent: "pink",
  roundQuestions: {
    hrScreen: [
      "Introduce yourself and share what inspired you to build mobile applications.",
      "Walk me through a mobile app on your resume published on Google Play or App Store.",
      "How do you handle App Store or Play Store submission rejections and policy updates?"
    ],
    techDomain: [
      "Explain the React Native architecture and how the JS bridge/New Architecture (JSI) works.",
      "How does FlatList optimize list rendering compared to a standard ScrollView?",
      "How do you implement secure offline data storage and background synchronization?",
      "What are Native Modules and when do you write native Swift/Kotlin code for React Native?",
      "How do push notifications work end-to-end from APNs/FCM to the device app?"
    ],
    managerial: [
      "Describe a scenario where a memory leak or crash caused negative app store reviews and how you fixed it."
    ]
  },

  skills: [
    {
      id: "react-native",
      title: "React Native Core",
      questions: [
        "Explain the architecture of React Native and how the JavaScript bridge works.",
        "What is the difference between native app development and cross-platform frameworks like React Native?",
        "How do you handle navigation and deep linking in a React Native application?",
        "What are Native Modules and when would you need to write one?",
        "Explain the difference between Hermes and JSC (JavaScriptCore) engines."
      ]
    },
    {
      id: "mobile-performance",
      title: "App Performance",
      questions: [
        "How do you ensure a mobile app provides a smooth 60fps experience for complex UI animations?",
        "What are the best practices for managing memory and preventing memory leaks in mobile apps?",
        "How do you optimize image loading and caching in a React Native app?",
        "Explain how you would profile and debug performance bottlenecks in a mobile app.",
        "How does FlatList optimize rendering large datasets compared to a standard ScrollView?"
      ]
    },
    {
      id: "offline-sync",
      title: "Offline & Background Tasks",
      questions: [
        "How do you handle offline caching and background data syncing in a mobile application?",
        "Explain how push notifications work from the server down to the device.",
        "How do you manage persistent local storage securely on iOS and Android?",
        "What are background tasks and how do you keep them running when the app is closed?",
        "How do you gracefully handle poor network connectivity in your app UI?"
      ]
    }
  ]
};
