export type AssignmentStatus = 'todo' | 'in-progress' | 'completed';

export interface Assignment {
  id: string;
  title: string;
  description: string;
  module: string;
  category?: string;
  dueDate: string;
  points: number;
  status: AssignmentStatus;
}

export const mockAssignments: Assignment[] = [
  {
    "id": "res-1",
    "title": "10 Android interview question answers for Freshers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/android-interview-questions.aspx",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-2",
    "title": "20 Essential Android Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/android/interview-questions",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-3",
    "title": "25 Essential Android Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/android/interview-questions",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-4",
    "title": "A couple of Android questions posted by Quora users",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.quora.com/What-are-good-job-interview-questions-for-an-Android-developer",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-5",
    "title": "A great list of Android interview questions covering all the aspects of this career",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/android/android_interview_questions.htm",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-6",
    "title": "Collection of Android and Java related questions and topics, including general developer questions, Java core, Data structures, Build Tools, Programming Paradigms, Core Android, Databases and etc",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/derekargueta/Android-Interview-Questions",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-7",
    "title": "Collection of Android and Java questions divided by experience",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/@neteinstein/not-another-android-interviews-article-the-questions-3dedafa30bec",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-8",
    "title": "RocketSkill App Android Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/mindash/android-structured-interview",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-9",
    "title": "Android cheat sheet: Coding program, Data structure, Android and Java interview questions with answers and categorized by topics",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/anitaa1990/Android-Cheat-sheet",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-10",
    "title": "Android Interview Questions And Answers From Beginner To Advanced",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.andreasschrade.com/2017/02/23/android-interview-questions/",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-11",
    "title": "Interview Questions for Senior Android Developers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/mohsenoid/Android-Interview-Questions",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-12",
    "title": "35+ Android Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/android-interview-questions/",
    "module": "Android",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-13",
    "title": "12 Essential AngularJS Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/angular-js/interview-questions",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-14",
    "title": "An AngularJS exam with questions from beginner to expert by @gdi2290 from @AngularClass",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/gdi2290/ngExam",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-15",
    "title": "29 AngularJS Interview Questions – Can You Answer Them All? Great Article from Codementor",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/angularjs/tutorial/angularjs-interview-questions-sample-answers",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-16",
    "title": "AngularJS interview questions and answers for experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.web-technology-experts-notes.in/2014/11/angularjs-interview-questions-and-answers-for-experienced.html",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-17",
    "title": "AngularJS Interview Questions which have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of AngularJS",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-18",
    "title": "This article discusses the top 50 Most occurred AngularJS interview question with answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.codeproject.com/Articles/891718/AngularJS-Interview-Questions-and-Answers",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-19",
    "title": "Top 25 Angularjs Interview Questions and Quiz",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-angular-js-interview-questions/",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-20",
    "title": "100 AngularJS Interview Questions - Quick Refresher",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/latest-angularjs-interview-questions-answers/",
    "module": "AngularJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-21",
    "title": "A list of helpful Angular related questions you can use to interview potential candidates, test yourself or completely ignore",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/Yonet/Angular-Interview-Questions",
    "module": "Angular",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-22",
    "title": "Angular 2 Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.onlineinterviewquestions.com/angular2-interview-questions/",
    "module": "Angular",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-23",
    "title": "List of 300 Angular Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sudheerj/angular-interview-questions",
    "module": "Angular",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-24",
    "title": "Angular Interview Questions (2020)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/angular-interview-questions/",
    "module": "Angular",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-25",
    "title": "Top Angular Interview Questions and Answers in 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://hackr.io/blog/angular-interview-questions",
    "module": "Angular",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-26",
    "title": "8 Essential Backbonejs Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/backbone-js/interview-questions",
    "module": "BackboneJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-27",
    "title": "Backbonejs Interview Questions And Answers from web technology experts notes",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.web-technology-experts-notes.in/2015/01/backbone-js-interview-questions-and-answers.html",
    "module": "BackboneJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-28",
    "title": "Top 25 Backbone.js interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-backbone-js-interview-questions/",
    "module": "BackboneJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-29",
    "title": "1000+ Multiple Choice Questions & Answers in C++ with explanations",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.sanfoundry.com/cplusplus-interview-questions-answers/",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-30",
    "title": "200 C++ interview questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/C++-Interview-questions-Answer.aspx",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-31",
    "title": "24 Essential C++ Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/c-plus-plus/interview-questions",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-32",
    "title": "C++ Interview Questions from GeekInterview",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.geekinterview.com/Interview-Questions/Languages/C-Plus-Plus",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-33",
    "title": "C++ Programming Q&A and quizzes from computer science portal for geeks",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.geeksforgeeks.org/c-plus-plus/",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-34",
    "title": "C++ Programming Questions and Answers related to such topics as OOPs concepts, Object and Classes, Functions, Constructors and Destructors, Inheritance and etc",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.indiabix.com/cpp-programming/questions-and-answers/",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-35",
    "title": "LeetCode Problems' Solutions written in C++",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/haoel/leetcode",
    "module": "C++",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-36",
    "title": "Basic C language technical frequently asked interview questions and answers It includes data structures, pointers interview questions and answers for experienced",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.cquestions.com/2010/10/c-interview-questions-and-answers.html",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-37",
    "title": "C Programming Interview Questions and Answers for such topics as Bits and Bytes, Preprocessors, Functions, Strings, Language basics and etc",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.indiabix.com/technical/c/",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-38",
    "title": "C Programming Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of C Programming",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/cprogramming/cprogramming_interview_questions.htm",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-39",
    "title": "First set of commonly asked C programming interview questions from computer science portal for geeks",
    "description": "Handpicked interview preparation guide and resource link. Link: http://geeksquiz.com/commonly-asked-c-programming-interview-questions-set-1/",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-40",
    "title": "Second set of commonly asked C programming interview questions from computer science portal for geeks",
    "description": "Handpicked interview preparation guide and resource link. Link: http://geeksquiz.com/commonly-asked-c-programming-interview-questions-set-2/",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-41",
    "title": "9 Essential C Interview Questions with answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/c/interview-questions",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-42",
    "title": "Top C Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/c-interview-questions/",
    "module": "C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-43",
    "title": "15 Essential C# Interview Question from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/c-sharp/interview-questions",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-44",
    "title": "C# interview questions from dotnetfunda.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.dotnetfunda.com/interviews/cat/6/csharp",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-45",
    "title": "Top 50 C# Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-c-sharp-interview-questions-answers/",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-46",
    "title": "50 C# Coding Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/csharp-coding-interview-questions-developers/",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-47",
    "title": "20 C# OOPS Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/csharp-oops-interview-questions-answers/",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-48",
    "title": "30+ C# Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/c-sharp-interview-questions/",
    "module": "C#",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-49",
    "title": "300 ASPNET interview questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/ASPNet-Questions.aspx",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-50",
    "title": "ASP.NET Core Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.talkingdotnet.com/asp-net-core-interview-questions/",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-51",
    "title": "Great list of NET interview questions covering all the NET platform topics",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.indiabix.com/technical/dotnet/",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-52",
    "title": "NET Interview Questions and Answers for Beginners which consists of the most frequently asked questions in NET This list of 100+ questions and answers gauge your familiarity with the NET platform",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.dotnetcurry.com/dotnetinterview/70/dotnet-interview-questions-answers-beginners",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-53",
    "title": "Questions gathered by community of the StackOverflow",
    "description": "Handpicked interview preparation guide and resource link. Link: http://stackoverflow.com/questions/365489/questions-every-good-net-developer-should-be-able-to-answer",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-54",
    "title": "What Great NET Developers Ought To Know (More NET Interview Questions)",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.hanselman.com/blog/WhatGreatNETDevelopersOughtToKnowMoreNETInterviewQuestions.aspx",
    "module": ".NET",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-55",
    "title": "Classic 'Fizz Buzz' interview question for Clojure developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.learningclojure.com/2014/05/fizz-buzz-interview-question.html",
    "module": "Clojure",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-56",
    "title": "Clojure Interview Questions for experienced devs",
    "description": "Handpicked interview preparation guide and resource link. Link: http://ita2zguide.blogspot.com.by/p/cc.html",
    "module": "Clojure",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-57",
    "title": "Coding exercises in Clojure, handy practice for technical interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/dpetrovics/coding-exercises",
    "module": "Clojure",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-58",
    "title": "Experience and questions from Clojure developer interview collected by Reddit users",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.reddit.com/r/Clojure/comments/34qhha/clojure_coding_job_interview_experience/",
    "module": "Clojure",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-59",
    "title": "Interview cake Clojure solutions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/DerekCuevas/interview-cake-clj",
    "module": "Clojure",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-60",
    "title": "CSS interview questions and answers for freshers and experienced candidates Also there you can find CSS online practice tests to fight written tests and certification exams on CSS",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/Interview-Questions-CSS.aspx",
    "module": "CSS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-61",
    "title": "Development hiring managers and potential interviewees may find there sample CSS proficiency interview Q&As and code snippets useful",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.techrepublic.com/blog/software-engineer/css-interview-questions-and-answers/",
    "module": "CSS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-62",
    "title": "Interview Questions and Exercises About CSS",
    "description": "Handpicked interview preparation guide and resource link. Link: https://css-tricks.com/interview-questions-css/",
    "module": "CSS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-63",
    "title": "Top 50 CSS(Cascading Style Sheet) Interview Questions covering the most of tricky CSS moments",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/",
    "module": "CSS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-64",
    "title": "Front End Interview Handbook - CSS Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://frontendinterviewhandbook.com/css-questions/",
    "module": "CSS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-65",
    "title": "Cucumber Web Application BDD Sample Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://ratedr05.wordpress.com/2017/09/22/cucumber-interview-questions/",
    "module": "Cucumber",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-66",
    "title": "Guide to building a simple Cucumber + Watir page object pattern framework",
    "description": "Handpicked interview preparation guide and resource link. Link: http://watir.com/simple-cucumber-watir-page-object-pattern-framework/",
    "module": "Cucumber",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-67",
    "title": "Some abstract interview questions for Python/Django developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://insights.dice.com/2014/04/30/interview-questions-pythondjango-developers/",
    "module": "Django",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-68",
    "title": "Some Django basic interview questions to establish the basic level of the candidates",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.ilian.io/django-interview-questions/",
    "module": "Django",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-69",
    "title": "Top 16 Django Interview Questions for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-16-django-interview-questions/",
    "module": "Django",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-70",
    "title": "Docker Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://mindmajix.com/docker-interview-questions",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-71",
    "title": "Top Docker Interview Questions You Must Prepare In 2019",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/docker-interview-questions/",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-72",
    "title": "Top Docker Interview Questions And Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://intellipaat.com/interview-question/docker-interview-questions/",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-73",
    "title": "DOCKER (SOFTWARE) INTERVIEW QUESTIONS & ANSWERS",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.wisdomjobs.com/e-university/docker-software-interview-questions.html",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-74",
    "title": "30 Docker Interview Questions and Answers in 2019",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.fullstack.cafe/blog/docker-interview-questions-and-answers",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-75",
    "title": "Docker Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/docker-interview-questions/",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-76",
    "title": "Top 50 Docker Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.wissenhive.com/blogs/top-50-docker-interview-questions-and-answers",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-77",
    "title": "Top 50+ Docker Interview Questions and Answers in 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techgeekbuzz.com/top-docker-interview-questions/",
    "module": "Docker",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-78",
    "title": "Top Elastic Stack Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://logit.io/blog/post/the-top-50-elk-stack-and-elasticsearch-interview-questions",
    "module": "Elastic",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-79",
    "title": "8 Essential Emberjs Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/emberjs/interview-questions",
    "module": "EmberJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-80",
    "title": "Top 25 Emberjs Interview Questions for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-ember-js-interview-questions/",
    "module": "EmberJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-81",
    "title": "Top 22 Erlang Interview Questions for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-22-erlang-interview-questions/",
    "module": "Erlang",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-82",
    "title": "Solutions for Elements of Programming Interviews problems written in Golang",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/mrekucci/epi",
    "module": "Golang",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-83",
    "title": "Solutions for some basic coding interview tasks written in Go",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/efischer19/golang_ctci",
    "module": "Golang",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-84",
    "title": "Top 20 GO Programming Interview Questions for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-20-go-programming-interview-questions/",
    "module": "Golang",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-85",
    "title": "8 GraphQl Interview Questions To Know",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.fullstack.cafe/blog/5-graphql-interview-questions-you-should-know",
    "module": "GraphQl",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-86",
    "title": "How to GraphQl - Common Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.howtographql.com/advanced/5-common-questions/",
    "module": "GraphQl",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-87",
    "title": "10 Typical HTML Interview Exercises from SitePoint.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.sitepoint.com/10-typical-html-interview-exercises/",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-88",
    "title": "16 Essential HTML5 Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/html5/interview-questions",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-89",
    "title": "40 important HTML 5 Interview questions with answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.codeproject.com/Articles/702051/important-HTML-Interview-questions-with-answe",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-90",
    "title": "HTML interview questions and answers for freshers and experienced candidates Also find HTML online practice tests to fight written tests and certification exams on HTML",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/Interview-Questions-HTML.aspx",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-91",
    "title": "Top 50 HTML Interview Questions for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-html-interview-questions/",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-92",
    "title": "Common HTML interview questions for freshers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.javatpoint.com/html-interview-questions",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-93",
    "title": "Front End Interview Handbook - HTML Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://frontendinterviewhandbook.com/html-questions/",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-94",
    "title": "30 HTML Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/latest-html-interview-questions/",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-95",
    "title": "30+ HTML Interview Questions (2021)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/html-interview-questions/",
    "module": "HTML",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-96",
    "title": "23 Beginner Level Ionic Framework Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.codeandyou.com/p/ionic-interview-questions.html",
    "module": "Ionic",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-97",
    "title": "12 Essential Ionic Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/ionic/interview-questions",
    "module": "Ionic",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-98",
    "title": "45 Ionic Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.javatpoint.com/ionic-interview-questions",
    "module": "Ionic",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-99",
    "title": "Most Asked Ionic Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.maheshbhusanoor.com/article/ionic-interview-questions-answers.html",
    "module": "Ionic",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-100",
    "title": "14 Essential iOS Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/ios/interview-questions",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-101",
    "title": "20 iOS Developer Interview Questions and Answers for getting you ready for your interview",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/ios/tutorial/ios-interview-tips-questions-answers-objective-c",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-102",
    "title": "25 Essential iOS Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/ios/interview-questions",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-103",
    "title": "A small guide to help those looking to hire a developer or designer for iOS work While tailored for iOS, many questions could be used for Android developers or designers as well A great self-test if you're looking to keep current or practice for your own interview",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/CameronBanga/iOS-Developer-and-Designer-Interview-Questions",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-104",
    "title": "All you need to know about iOS technical interview including some tips for preparing, questions and some coding exercises",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.raywenderlich.com/53962/ios-interview-questions",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-105",
    "title": "Interview Questions for iOS and Mac Developers from the CEO of Black Pixel",
    "description": "Handpicked interview preparation guide and resource link. Link: https://blackpixel.com/writing/2013/04/interview-questions-for-ios-and-mac-developers-1.html",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-106",
    "title": "iOS Interview Questions and Answers including such topics as Development Basics, App states and multitasking, App states, Core app objects",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.geekinterview.com/Interview-Questions/iOS",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-107",
    "title": "iOS Interview Questions For Senior Developers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://m.smartcloud.io/ios-interview-questions-for-senior-developers-in-2017-a94cc81c8205",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-108",
    "title": "50 iOS Interview Questions And Answers 1",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/ios-os-x-development/ios-interview-questions-13840247a57a",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-109",
    "title": "50 iOS Interview Questions And Answers Part 2",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/ios-os-x-development/50-ios-interview-questions-and-answers-part-2-45f952230b9f",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-110",
    "title": "50 iOS Interview Questions And Answers Part 3",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/ios-os-x-development/50-ios-interview-questions-and-answers-part-3-3fad146b6c3d",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-111",
    "title": "50 iOS Interview Questions And Answers Part 4",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/@duruldalkanat/50-ios-interview-questions-and-answers-part-4-6f26b26341a",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-112",
    "title": "50 iOS Interview Questions And Answers Part 5",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/@duruldalkanat/50-ios-interview-questions-and-answers-part-5-de6241374a8f",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-113",
    "title": "10 iOS interview questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.upwork.com/i/interview-questions/ios/",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-114",
    "title": "iOS Developer and Designer Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/9magnets/iOS-Developer-and-Designer-Interview-Questions#tech",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-115",
    "title": "IOS Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.thecrazyprogrammer.com/2015/11/ios-interview-questions-and-answers.html",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-116",
    "title": "iOS Interview Questions For Beginners",
    "description": "Handpicked interview preparation guide and resource link. Link: http://ichuiphonedev.blogspot.com/2014/05/iphone-latest-interview-questions-and.html",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-117",
    "title": "Babylon iOS Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/Babylonpartners/ios-playbook/blob/master/Interview/questions.md",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-118",
    "title": "RocketSkill App iOS Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/mindash/iOS-structured-interview",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-119",
    "title": "iOS Static vs Dynamic Dispatch",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/flawless-app-stories/static-vs-dynamic-dispatch-in-swift-a-decisive-choice-cece1e872d",
    "module": "iOS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-120",
    "title": "List of Java programs for interview Categoriwise",
    "description": "Handpicked interview preparation guide and resource link. Link: https://onurdesk.com/category/interview/interview-program-java/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-121",
    "title": "115 Java Interview Questions and Answers – The ULTIMATE List",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.javacodegeeks.com/2014/04/java-interview-questions-and-answers.html",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-122",
    "title": "37 Java Interview Questions to Practice With from Codementor",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/java/tutorial/java-interview-sample-questions-answers",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-123",
    "title": "21 Essential Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/java/interview-questions",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-124",
    "title": "Top 30 Core Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.janbasktraining.com/blog/core-java-interview-questions-answers/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-125",
    "title": "29 Essential Java Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/java/interview-questions",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-126",
    "title": "A collection of Java interview questions and answers to them",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/svozniuk/java-interviews",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-127",
    "title": "Data Structures and Algorithms in Java which can be useful in interview process",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/donbeave/interview",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-128",
    "title": "Java Interview Questions: How to crack the TOP 15 questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://blog.udemy.com/java-interview-questions/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-129",
    "title": "300 Core Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.javatpoint.com/corejava-interview-questions",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-130",
    "title": "Top 10 Tricky Java interview questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://java67.blogspot.com.by/2012/09/top-10-tricky-java-interview-questions-answers.html",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-131",
    "title": "Top 25 Most Frequently Asked Interview Core Java Interview Questions And Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://javahungry.blogspot.com/2013/06/top-25-most-frequently-asked-core-java.html",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-132",
    "title": "Top 40 Core Java Interview Questions Answers from Telephonic Round",
    "description": "Handpicked interview preparation guide and resource link. Link: http://java67.blogspot.sg/2015/03/top-40-core-java-interview-questions-answers-telephonic-round.html",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-133",
    "title": "Top 50 Spring Interview Questions You Must Prepare For In 2020",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/spring-interview-questions/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-134",
    "title": "Spring Interview Questions And Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.journaldev.com/2696/spring-interview-questions-and-answers",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-135",
    "title": "Interview Cake Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewcake.com/java-interview-questions",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-136",
    "title": "Java Interview Questions & Quizzes",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/java-interview-questions/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-137",
    "title": "Essetial Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://fdk.codes/some-java-interview-questions/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-138",
    "title": "Fundamental Java Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/java-interview-questions/",
    "module": "Java",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-139",
    "title": "Practice common algorithms using JavaScript",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/ignacio-chiazzo/Algorithms-Leetcode-Javascript",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-140",
    "title": "10 Interview Questions Every JavaScript Developer Should Know",
    "description": "Handpicked interview preparation guide and resource link. Link: https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-141",
    "title": "21 Essential JavaScript Interview Questions from best mentors all over the world",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/javascript/tutorial/21-essential-javascript-tech-interview-practice-questions-answers",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-142",
    "title": "20 Essential JavaScript Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/javascript-developers/interview-questions",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-143",
    "title": "37 Essential JavaScript Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/javascript/interview-questions",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-144",
    "title": "5 More JavaScript Interview Exercises",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.sitepoint.com/5-javascript-interview-exercises/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-145",
    "title": "5 Typical JavaScript Interview Exercises",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.sitepoint.com/5-typical-javascript-interview-exercises/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-146",
    "title": "Development hiring managers and potential interviewees may find these sample JavaScript proficiency interview Q&As and code snippets useful",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.techrepublic.com/blog/software-engineer/javascript-interview-questions-and-answers/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-147",
    "title": "123 Essential JavaScript Interview Question",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/nishant8BITS/123-Essential-JavaScript-Interview-Question",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-148",
    "title": "JavaScript Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of JavaScript",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/javascript/javascript_interview_questions.htm",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-149",
    "title": "JS: Basics and Tricky Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.thatjsdude.com/interview/js2.html",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-150",
    "title": "JS: Interview Algorithm",
    "description": "Handpicked interview preparation guide and resource link. Link: http://thatjsdude.com/interview/js1.html",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-151",
    "title": "Some basic javascript coding challenges and interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/kolodny/exercises",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-152",
    "title": "Some JavaScript interview exercises",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/csvenja/javascript-exercises",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-153",
    "title": "Ten Questions I've Been Asked, Most More Than Once, Over Six Technical JavaScript / Front-End Engineer Job Interviews.",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.reddit.com/r/javascript/comments/3rb88w/ten_questions_ive_been_asked_most_more_than_once",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-154",
    "title": "Top 85 JavaScript Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-85-javascript-interview-questions/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-155",
    "title": "Interview Cake JavaScript Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewcake.com/javascript-interview-questions",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-156",
    "title": "The Best Frontend JavaScript Interview Questions (written by a Frontend Engineer)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://performancejs.com/post/hde6d32/The-Best-Frontend-JavaScript-Interview-Questions-(written-by-a-Frontend-Engineer",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-157",
    "title": "10 JavaScript Concepts You Need to Know for Interviews",
    "description": "Handpicked interview preparation guide and resource link. Link: https://dev.to/arnavaggarwal/10-javascript-concepts-you-need-to-know-for-interviews",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-158",
    "title": "Front End Interview Handbook - JavaScript Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://frontendinterviewhandbook.com/javascript-questions/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-159",
    "title": "JavaScript Interview Questions - Quick Refresher",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/javascript-interview-questions-answers/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-160",
    "title": "The MEGA Interview Guide",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/danieldelcore/mega-interview-guide",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-161",
    "title": "Javascript Interview Questions and Answers (2020)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/javascript-interview-questions/",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-162",
    "title": "JavaScript Modern Interview Code Challenges 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sadanandpai/javascript-code-challenges",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-163",
    "title": "70 JavaScript Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://dev.to/macmacky/70-javascript-interview-questions-5gfi",
    "module": "JavaScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-164",
    "title": "Top 50 jquery interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://career.guru99.com/top-50-jquery-interview-questions/",
    "module": "jQuery",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-165",
    "title": "17 Essential jQuery Interview Questions From Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/jquery/interview-questions",
    "module": "jQuery",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-166",
    "title": "Top JQuery Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techgeekbuzz.com/top-jquery-interview-questions/",
    "module": "jQuery",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-167",
    "title": "Webpack interview questions & answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/styopdev/webpack-interview-questions",
    "module": "Front-end build tools",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-168",
    "title": "Gulp js interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codeproject.com/Articles/1065184/Latest-Gulp-js-interview-questions",
    "module": "Front-end build tools",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-169",
    "title": "Grunt js interview questions for beginners",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.talkingdotnet.com/grunt-js-interview-questions/",
    "module": "Front-end build tools",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-170",
    "title": "Grunt js interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://mindmajix.com/grunt-interview-questions",
    "module": "Front-end build tools",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-171",
    "title": "15 interview questions from CodeSample.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.code-sample.com/2014/01/knockout-js-interview-questions-and.html",
    "module": "KnockoutJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-172",
    "title": "20 questions you might be asked about KnockoutJS in an interview for both freshers and experienced developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.codeproject.com/Articles/987899/KnockoutJS-interview-questions",
    "module": "KnockoutJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-173",
    "title": "Top 25 LESS Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-less-interview-questions/",
    "module": "Less",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-174",
    "title": "10 LISP Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.sanfoundry.com/lisp-mcqs-class/",
    "module": "Lisp",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-175",
    "title": "Top 18 Lisp Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-18-lisp-interview-questions/",
    "module": "Lisp",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-176",
    "title": "25 Essential Node.js Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/nodejs/interview-questions",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-177",
    "title": "8 Essential Nodejs Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/nodejs/interview-questions",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-178",
    "title": "Node.JS Interview Questions have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of Node.JS",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/nodejs/nodejs_interview_questions.htm",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-179",
    "title": "Node.js Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://blog.risingstack.com/node-js-interview-questions/",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-180",
    "title": "Top 25 Nodejs Interview Questions & Answers from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-interview-questions-on-node-js/",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-181",
    "title": "Top 30 Node.Js Interview Questions With Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/top-30-node-js-interview-questions-answers/",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-182",
    "title": "Top Nodejs Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/node-js-interview-questions/",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-183",
    "title": "Node.js Interview Questions in Chinese",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/haizlin/fe-interview/blob/master/category/nodejs.md",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-184",
    "title": "Node.js Interview Questions by learning-zone",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/learning-zone/nodejs-interview-questions",
    "module": "NodeJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-185",
    "title": "Interview Qs for Objective-C and Swift",
    "description": "Handpicked interview preparation guide and resource link. Link: http://insights.dice.com/2015/07/21/interview-qs-objective-c-swift/",
    "module": "Objective-C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-186",
    "title": "iOS Interview Questions For Beginners",
    "description": "Handpicked interview preparation guide and resource link. Link: http://ichuiphonedev.blogspot.com/2014/05/iphone-latest-interview-questions-and.html",
    "module": "Objective-C",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-187",
    "title": "100 PHP interview questions and answers from CareerRide.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/PHP-Interview-Questions.aspx",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-188",
    "title": "21 Essential PHP Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/php/interview-questions",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-189",
    "title": "20 Common PHP Job Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.woodstitch.com/resources/php-interview-questions.php",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-190",
    "title": "25 Essential PHP Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/php/interview-questions",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-191",
    "title": "PHP interview questions and answers for freshers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://phpinterviewquestions.co.in/",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-192",
    "title": "Top 100 PHP Interview Questions & Answers from CareerGuru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-100-php-interview-questions-answers/",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-193",
    "title": "25 PHP Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/php/tutorial/php-interview-questions-sample-answers",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-194",
    "title": "26 Essential PHP Interview Questions for 2018",
    "description": "Handpicked interview preparation guide and resource link. Link: https://pangara.com/blog/php-interview-questions",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-195",
    "title": "Cracking PHP Interviews Questions ebook 300+ Q&A",
    "description": "Handpicked interview preparation guide and resource link. Link: https://bootsity.com/books",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-196",
    "title": "PHP Interview Questions - Quick Refresher",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/latest-php-interview-questions-answers/",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-197",
    "title": "30+ PHP Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/php-interview-questions/",
    "module": "PHP",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-198",
    "title": "26 Essential Python Interview Questions from Adeva",
    "description": "Handpicked interview preparation guide and resource link. Link: https://adevait.com/python/interview-questions",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-199",
    "title": "20 Python interview questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/python-interview-questions.aspx",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-200",
    "title": "11 Essential Python Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/python/interview-questions",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-201",
    "title": "A listing of questions that could potentially be asked for a python job listing",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sigmavirus24/python-interview-questions",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-202",
    "title": "Interview Questions for both beginners and experts",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.bogotobogo.com/python/python_interview_questions.php",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-203",
    "title": "Interview Cake Python Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewcake.com/python-interview-questions",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-204",
    "title": "Python Frequently Asked Questions (Programming)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://docs.python.org/2/faq/programming.html",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-205",
    "title": "Python interview questions collected by Reddit users",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.reddit.com/r/Python/comments/1knw7z/python_interview_questions",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-206",
    "title": "Top 25 Python Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-python-interview-questions/",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-207",
    "title": "Python Interview 10 questions from Corey Schafer",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.youtube.com/watch?v=DEwgZNC-KyE",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-208",
    "title": "Python interview questions. Part I. Junior",
    "description": "Handpicked interview preparation guide and resource link. Link: https://luminousmen.com/post/6",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-209",
    "title": "Python interview questions. Part II. Middle",
    "description": "Handpicked interview preparation guide and resource link. Link: https://luminousmen.com/post/7",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-210",
    "title": "Python interview questions. Part III. Senior",
    "description": "Handpicked interview preparation guide and resource link. Link: https://luminousmen.com/post/8",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-211",
    "title": "Python Interview Questions and Answers (2019)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/python-interview-questions/",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-212",
    "title": "100 Python Interview Questions - Quick Refresher",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/python-interview-questions-programmers/",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-213",
    "title": "Top 100 Python Interview Questions from Edureka (2021)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/python-interview-questions/",
    "module": "Python",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-214",
    "title": "20 Ruby on Rails interview questions and answers from CareerRide.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/ruby-on-rails-interview-questions.aspx",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-215",
    "title": "9 Essential Ruby on Rails Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/ruby-on-rails/interview-questions",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-216",
    "title": "High-level Ruby on Rails Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/rishiip/ruby-on-rails-interview-questions",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-217",
    "title": "Ruby And Ruby On Rails interview Q&A",
    "description": "Handpicked interview preparation guide and resource link. Link: http://anilpunjabi.tumblr.com/post/25948339235/ruby-and-rails-interview-questions-and-answers",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-218",
    "title": "Some of the most frequently asked Ruby on Rails questions and how to answer them confidently",
    "description": "Handpicked interview preparation guide and resource link. Link: https://srikantmahapatra.wordpress.com/2013/11/07/ruby-on-rails-interview-questions-and-answers/",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-219",
    "title": "11 Ruby on Rails Interview Practice Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/ruby-on-rails/tutorial/ruby-on-rails-interview-questions",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-220",
    "title": "Top 53 Ruby on Rails Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://career.guru99.com/top-34-ruby-on-rail-interview-questions/",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-221",
    "title": "10 Ruby on Rails interview questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.upwork.com/i/interview-questions/ruby-on-rails/",
    "module": "Ruby on Rails",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-222",
    "title": "Reddit users share their expectations from ReactJS interview",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.reddit.com/r/reactjs/comments/3m5equ/react_what_interview_questions_to_expect/",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-223",
    "title": "5 Essential React.js Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.codementor.io/reactjs/tutorial/5-essential-reactjs-interview-questions",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-224",
    "title": "React Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://tylermcginnis.com/react-interview-questions/",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-225",
    "title": "Toptal's 21 Essential React.js Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/react/interview-questions",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-226",
    "title": "19 Essential ReactJs Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.educba.com/reactjs-interview-questions/",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-227",
    "title": "React Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sudheerj/reactjs-interview-questions",
    "module": "ReactJS",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-228",
    "title": "21 Essential Ruby Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/ruby/interview-questions",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-229",
    "title": "15 Questions to Ask During a Ruby Interview",
    "description": "Handpicked interview preparation guide and resource link. Link: https://gist.github.com/ryansobol/5252653",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-230",
    "title": "A list of questions about Ruby programming you can use to quiz yourself",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/undr/ruby-trivia",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-231",
    "title": "The Art of Ruby Technical Interview",
    "description": "Handpicked interview preparation guide and resource link. Link: http://technology.customink.com/blog/2015/11/23/the-art-of-ruby-technical-interviews/",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-232",
    "title": "Interview Cake Ruby Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewcake.com/ruby-interview-questions",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-233",
    "title": "Frequently Asked Ruby Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.javatpoint.com/ruby-interview-questions",
    "module": "Ruby",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-234",
    "title": "Top 250+ Rust Programming Language Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.wisdomjobs.com/e-university/rust-programming-language-interview-questions.html",
    "module": "Rust",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-235",
    "title": "Rust Programming Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.code-sample.com/2018/02/rust-programming-interview-questions.html",
    "module": "Rust",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-236",
    "title": "rust-exam: A set of questions about the Rust programming language",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/jean553/rust-exam",
    "module": "Rust",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-237",
    "title": "Best Rust Programming Language Interview Questions and answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.bestinterviewquestion.com/rust-programming-language-interview-questions",
    "module": "Rust",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-238",
    "title": "Top 17 Sass Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-17-sass-interview-questions/",
    "module": "Sass",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-239",
    "title": "Top 10 Sass Interview Questions from educba",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.educba.com/sass-interview-questions/",
    "module": "Sass",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-240",
    "title": "4 Interview Questions for Scala Developers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://insights.dice.com/2014/09/12/4-interview-questions-scala-developers/",
    "module": "Scala",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-241",
    "title": "A list of Frequently Asked Questions and their answers, sorted by category",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.scala-lang.org/old/faq",
    "module": "Scala",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-242",
    "title": "A list of helpful Scala related questions you can use to interview potential candidates",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/Jarlakxen/Scala-Interview-Questions",
    "module": "Scala",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-243",
    "title": "How Scala Developers Are Being Interviewed",
    "description": "Handpicked interview preparation guide and resource link. Link: http://programmers.stackexchange.com/questions/58145/how-scala-developers-are-being-interviewed",
    "module": "Scala",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-244",
    "title": "Top 25 Scala Interview Questions & Answers from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-25-interview-questions-on-scala/",
    "module": "Scala",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-245",
    "title": "Sharepoint Interview Question For Developer",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.rajeshg.me/2013/05/sharepoint-developer-2010-interview.html",
    "module": "SharePoint",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-246",
    "title": "Top SharePoint Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://intellipaat.com/blog/interview-question/sharepoint-interview-questions/",
    "module": "SharePoint",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-247",
    "title": "Top 50 Shell Scripting Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/shell-scripting-interview-questions/",
    "module": "Shell",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-248",
    "title": "Carefully Curated 70 Spark Questions with Additional Optimization Guides (First in the series)",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/ankurchavda/SparkLearning#spark-learning-guide",
    "module": "Spark",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-249",
    "title": "10 Essential Swift Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/swift/interview-questions",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-250",
    "title": "Get prepared for your next iOS job interview by studying high quality LeetCode solutions in Swift 5",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/diwu/LeetCode-Solutions-in-Swift",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-251",
    "title": "Swift Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.raywenderlich.com/762435-swift-interview-questions-and-answers",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-252",
    "title": "Swift Programming Language Interview Questions And Answers from mycodetips.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://mycodetips.com/swift-ios/swift-programming-language-interview-questions-answers-987.html",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-253",
    "title": "Your top 10 Swift questions answered",
    "description": "Handpicked interview preparation guide and resource link. Link: http://blog.udacity.com/2014/11/your-top-10-swift-questions-answered.html",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-254",
    "title": "Swift interview questions and answers on Swift 5 by Raywenderlich",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.raywenderlich.com/762435-swift-interview-questions-and-answers",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-255",
    "title": "Dynamic keyword in Swift",
    "description": "Handpicked interview preparation guide and resource link. Link: https://cocoacasts.com/what-does-the-dynamic-keyword-mean-in-swift-3",
    "module": "Swift",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-256",
    "title": "List of 300 VueJS Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sudheerj/vuejs-interview-questions",
    "module": "Vue.js",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-257",
    "title": "Top 45 WordPress interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://pangara.com/blog/blog45-wordpress-interview-questions-and-answers/",
    "module": "WordPress",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-258",
    "title": "10 Essential WordPress Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/wordpress/interview-questions",
    "module": "WordPress",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-259",
    "title": "Typescript Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.onlineinterviewquestions.com/typescript-interview-questions",
    "module": "TypeScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-260",
    "title": "Top 10 TypeScript Interview Questions and Answers for Beginner Web Developers 2019",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.positronx.io/typescript-interview-questions-answers-2109/",
    "module": "TypeScript",
    "category": "Programming Languages/Frameworks/Platforms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-261",
    "title": "Top 23 Cassandra Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-23-cassandra-interview-questions/",
    "module": "Cassandra",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-262",
    "title": "Top 16 Microsoft Access Database Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-16-ms-access-database-interview-questions/",
    "module": "Microsoft Access",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-263",
    "title": "28 MongoDB NoSQL Database Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://theprofessionalspoint.blogspot.com.by/2014/01/28-mongodb-nosql-database-interview.html",
    "module": "MongoDB",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-264",
    "title": "MongoDB frequently Asked Questions by expert members with experience in MongoDB These questions and answers will help you strengthen your technical skills, prepare for the new job test and quickly revise the concepts",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.globalguideline.com/interview_questions/Questions.php?sc=MongoDB",
    "module": "MongoDB",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-265",
    "title": "MongoDB Interview Questions from JavaTPointcom",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.javatpoint.com/mongodb-interview-questions",
    "module": "MongoDB",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-266",
    "title": "MongoDB Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of MongoDB",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/mongodb/mongodb_interview_questions.htm",
    "module": "MongoDB",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-267",
    "title": "Top 20 MongoDB interview questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-20-mongodb-interview-questions/",
    "module": "MongoDB",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-268",
    "title": "10 MySQL Database Interview Questions for Beginners and Intermediates",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tecmint.com/10-mysql-database-interview-questions-for-beginners-and-intermediates/",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-269",
    "title": "100 MySQL interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.careerride.com/MySQL-Interview-Questions.aspx",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-270",
    "title": "15 Basic MySQL Interview Questions for Database Administrators",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tecmint.com/basic-mysql-interview-questions-for-database-administrators/",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-271",
    "title": "28 MySQL interview questions from JavaTPoint.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.javatpoint.com/mysql-interview-questions",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-272",
    "title": "40 Basic MySQL Interview Questions with Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.testingbrain.com/interview/mysql-interview-questions.html",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-273",
    "title": "Top 50 MySQL Interview Questions & Answers from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-mysql-interview-questions-answers/",
    "module": "MySQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-274",
    "title": "Top 20 Neo4j Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-20-ne04j-interview-questions/",
    "module": "Neo4j",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-275",
    "title": "General Oracle Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.coolinterview.com/type.asp?iType=57",
    "module": "Oracle",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-276",
    "title": "13 PostgreSQL Interview Q&A",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.dotnetfunda.com/interviews/cat/208/postgresql",
    "module": "Postgres",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-277",
    "title": "Frequently Asked Basic PostgreSQL Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://nazafbtemplate.blogspot.com.by/2014/06/frequently-asked-basic-postgresql.html",
    "module": "Postgres",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-278",
    "title": "PostgreSQL Interview Preparation Guide",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.globalguideline.com/interview_questions/Questions.php?sc=postgresqk_database_",
    "module": "Postgres",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-279",
    "title": "PostgreSQL Interview Q&A from CoolInterview.com",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.coolinterview.com/type.asp?iType=411",
    "module": "Postgres",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-280",
    "title": "10 Frequently asked SQL Query Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://java67.blogspot.com.by/2013/04/10-frequently-asked-sql-query-interview-questions-answers-database.html",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-281",
    "title": "45 Essential SQL Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/sql/interview-questions",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-282",
    "title": "Common Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.indiabix.com/technical/sql-server-common-questions/",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-283",
    "title": "General Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.indiabix.com/technical/sql-server-general-questions/",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-284",
    "title": "Schema, Questions & Solutions for SQL Exercising",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/XD-DENG/SQL-exercise",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-285",
    "title": "SQL Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of SQL",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/sql/sql_interview_questions.htm",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-286",
    "title": "SQL Interview Questions CHEAT SHEET",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/sql-interview-questions/",
    "module": "SQL",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-287",
    "title": "Top 20 SQLITE  Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-20-sql-lite-interview-questions/",
    "module": "SQLite",
    "category": "Database technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-288",
    "title": "Memcached Interview Questions from Javapoint",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.javatpoint.com/memcached-interview-questions-and-answers",
    "module": "Memcached",
    "category": "Caching technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-289",
    "title": "Memcached Interview Questions from Wisdomjobs",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.wisdomjobs.com/e-university/memcached-interview-questions.html",
    "module": "Memcached",
    "category": "Caching technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-290",
    "title": "Redis Interview Questions from Javapoint",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.javatpoint.com/redis-interview-questions-and-answers",
    "module": "Redis",
    "category": "Caching technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-291",
    "title": "Redis Interview Questions from Wisdomjobs",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.wisdomjobs.com/e-university/redis-interview-questions-answers.html",
    "module": "Redis",
    "category": "Caching technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-292",
    "title": "Redis Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: https://career.guru99.com/top-10-redis-interview-questions/",
    "module": "Redis",
    "category": "Caching technologies",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-293",
    "title": "10 Job Interview Questions for Linux System Administrators from Linux.com",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.linuxfoundation.org/blog/2015/07/10-job-interview-questions-for-linux-system-administrators/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-294",
    "title": "10 Useful Random Linux Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tecmint.com/useful-random-linux-interview-questions-and-answers/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-295",
    "title": "11 Basic Linux Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tecmint.com/basic-linux-interview-questions-and-answers/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-296",
    "title": "11 Essential Linux Interview Questions from Toptal",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.toptal.com/linux/interview-questions",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-297",
    "title": "Top 30 Linux System Admin Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.linuxtechi.com/experience-linux-admin-interview-questions/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-298",
    "title": "Top 50 Linux Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-linux-interview-questions/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-299",
    "title": "278 Test Questions and Answers for \\*nix System Administrators",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/trimstray/test-your-sysadmin-skills",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-300",
    "title": "Linux Interview Questions - Quick Refresher",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techbeamers.com/essential-linux-questions-answers/",
    "module": "Linux",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-301",
    "title": "Top 10 Interview Questions for Windows Administrators",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.brentozar.com/archive/2009/07/top-10-interview-questions-for-windows-sysadmins/",
    "module": "Windows",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-302",
    "title": "Top 22 Windows Server Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-22-windows-server-interview-questions/",
    "module": "Windows",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-303",
    "title": "Windows Admin Interview Questions & Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.01world.in/p/windows.html",
    "module": "Windows",
    "category": "OS",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-304",
    "title": "Linux System Administrator/DevOps Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/chassing/linux-sysadmin-interview-questions",
    "module": "Windows",
    "category": "DevOps",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-305",
    "title": "Top DevOps Interview Questions You Must Prepare In 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/top-devops-interview-questions-2016/",
    "module": "Windows",
    "category": "DevOps",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-306",
    "title": "Top 60+ DevOps Interview Questions &amp; Answers in 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://intellipaat.com/interview-question/devops-interview-questions/",
    "module": "Windows",
    "category": "DevOps",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-307",
    "title": "DevOps Interview Questions &amp; Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/devops-interview-questions/",
    "module": "Windows",
    "category": "DevOps",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-308",
    "title": "Comprehensive list of interview questions of top tech companies",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/rishabh115/Interview-Questions",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-309",
    "title": "A great list of Java interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://java2novice.com/java-interview-programs/",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-310",
    "title": "Algorithms playground for common interview questions written in Ruby",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/sagivo/algorithms",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-311",
    "title": "EKAlgorithms contains some well known CS algorithms & data structures",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/EvgenyKarkan/EKAlgorithms",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-312",
    "title": "Top 10 Algorithms for Coding Interview",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.programcreek.com/2012/11/top-10-algorithms-for-coding-interview/",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-313",
    "title": "Top 15 Data Structures and Algorithm Interview Questions for Java programmer",
    "description": "Handpicked interview preparation guide and resource link. Link: http://javarevisited.blogspot.com.by/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-314",
    "title": "Tech Interview Handbook Best Practice Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://techinterviewhandbook.org/best-practice-questions/",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-315",
    "title": "Daily Coding Interview Practice",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.techseries.dev/daily",
    "module": "Windows",
    "category": "Algorithms",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-316",
    "title": "Top 55 Blockchain Interview Questions You Must Prepare In 2018",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/blockchain-interview-questions/",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-317",
    "title": "Blockchain Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://mindmajix.com/blockchain-interview-questions",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-318",
    "title": "Top Blockchain Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://intellipaat.com/interview-question/blockchain-interview-questions/",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-319",
    "title": "Blockchain Developer Interview Questions and Answers",
    "description": "Handpicked interview preparation guide and resource link. Link: https://applicature.com/blog/blockchain-interview-questions",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-320",
    "title": "10 Essential Blockchain Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.toptal.com/blockchain/interview-questions",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-321",
    "title": "Top 30 Blockchain Interview Questions – For Freshers to Experienced",
    "description": "Handpicked interview preparation guide and resource link. Link: https://data-flair.training/blogs/blockchain-interview-questions/",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-322",
    "title": "Most Frequently Asked Blockchain Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.digitalvidya.com/blog/blockchain-interview-questions/",
    "module": "Windows",
    "category": "Blockchain",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-323",
    "title": "Common interview questions and puzzles solved in several languages",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/mre/the-coding-interview",
    "module": "Windows",
    "category": "Coding exercises",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-324",
    "title": "Interactive, test-driven Python coding challenges (algorithms and data structures) typically found in coding interviews or coding competitions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/donnemartin/interactive-coding-challenges",
    "module": "Windows",
    "category": "Coding exercises",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-325",
    "title": "Interview questions solved in python",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/roseperrone/interview-questions",
    "module": "Windows",
    "category": "Coding exercises",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-326",
    "title": "7 Swift Coding Challenges to Practice Your Skills",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.makeuseof.com/tag/swift-coding-challenges/",
    "module": "Windows",
    "category": "Coding exercises",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-327",
    "title": "A list of helpful front-end related questions you can use to interview potential candidates, test yourself or completely ignore",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/h5bp/Front-end-Developer-Interview-Questions",
    "module": "Windows",
    "category": "Comprehensive lists",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-328",
    "title": "Front End Developer Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.aperfectmix.com/free_web_design/front-end-interview-questions.html",
    "module": "Windows",
    "category": "Comprehensive lists",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-329",
    "title": "Front End Interview Handbook",
    "description": "Handpicked interview preparation guide and resource link. Link: https://frontendinterviewhandbook.com/",
    "module": "Windows",
    "category": "Comprehensive lists",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-330",
    "title": "Some simple questions to interview potential backend candidates",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/starandtina/backend-interview-questions",
    "module": "Windows",
    "category": "Comprehensive lists",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-331",
    "title": "Design Pattern Interview Questions that have been designed specially to get you acquainted with the nature of questions you may encounter during your interview for the subject of Design Pattern",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.tutorialspoint.com/design_pattern/design_pattern_interview_questions.htm",
    "module": "Windows",
    "category": "Design Patterns",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-332",
    "title": "Design Patterns for Humans™ - An ultra-simplified explanation",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/kamranahmedse/design-patterns-for-humans",
    "module": "Windows",
    "category": "Design Patterns",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-333",
    "title": "Design Patterns implemented in Java",
    "description": "Handpicked interview preparation guide and resource link. Link: https://github.com/iluwatar/java-design-patterns",
    "module": "Windows",
    "category": "Design Patterns",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-334",
    "title": "Design Patterns implemented in DotNet",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.dofactory.com/net/design-patterns",
    "module": "Windows",
    "category": "Design Patterns",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-335",
    "title": "Top 15 Data Structures and Algorithm Interview Questions for Java programmer",
    "description": "Handpicked interview preparation guide and resource link. Link: http://javarevisited.blogspot.com.by/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html",
    "module": "Windows",
    "category": "Data structures",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-336",
    "title": "Top 50 Data Structure Interview Questions from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-50-data-structure-interview-questions/",
    "module": "Windows",
    "category": "Data structures",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-337",
    "title": "What is Data Structure? | Top 40 Data Structure Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/data-structure-interview-questions/",
    "module": "Windows",
    "category": "Data structures",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-338",
    "title": "Top 100 Networking Interview Questions & Answers from Career Guru",
    "description": "Handpicked interview preparation guide and resource link. Link: http://career.guru99.com/top-100-networking-interview-questions-answers/",
    "module": "Windows",
    "category": "Networks",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-339",
    "title": "Networking Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/networking-interview-questions/",
    "module": "Windows",
    "category": "Networks",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-340",
    "title": "101 IT Security Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: http://careers.simplicable.com/careers/new/101-IT-security-interview-questions",
    "module": "Windows",
    "category": "Security",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-341",
    "title": "How to prepare for an information security job interview?",
    "description": "Handpicked interview preparation guide and resource link. Link: http://searchsecurity.techtarget.com/tip/How-to-prepare-for-an-information-security-job-interview",
    "module": "Windows",
    "category": "Security",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-342",
    "title": "Information Security Interview Questions from Daniel Miessler",
    "description": "Handpicked interview preparation guide and resource link. Link: https://danielmiessler.com/study/infosec_interview_questions/",
    "module": "Windows",
    "category": "Security",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-343",
    "title": "Top 50 Information Security Interview Questions for freshers and experts",
    "description": "Handpicked interview preparation guide and resource link. Link: http://resources.infosecinstitute.com/top-50-information-security-interview-questions/",
    "module": "Windows",
    "category": "Security",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-344",
    "title": "Data Science Interview Questions for Top Tech Companies",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.dezyre.com/article/-data-science-interview-questions-for-top-tech-companies/189",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-345",
    "title": "66 Job Interview Questions for Data Scientists",
    "description": "Handpicked interview preparation guide and resource link. Link: http://www.datasciencecentral.com/profiles/blogs/66-job-interview-questions-for-data-scientists",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-346",
    "title": "Top 45 Data Science Interview Questions You Must Prepare In 2021",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.edureka.co/blog/interview-questions/data-science-interview-questions/",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-347",
    "title": "Top 30 data science interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://towardsdatascience.com/top-30-data-science-interview-questions-7dd9a96d3f5c",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-348",
    "title": "Top 100 Data science interview questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.datacamp.com/community/news/top-100-data-science-interview-questions-cc3lts7gj5j",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-349",
    "title": "Data Science Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://hackr.io/blog/data-science-interview-questions",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-350",
    "title": "160+ Data Science Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://hackernoon.com/160-data-science-interview-questions-415s3y2a",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  },
  {
    "id": "res-351",
    "title": "Top Data Science Interview Questions",
    "description": "Handpicked interview preparation guide and resource link. Link: https://www.interviewbit.com/data-science-interview-questions/",
    "module": "Windows",
    "category": "Data Science",
    "dueDate": "Self-Paced",
    "points": 50,
    "status": "todo"
  }
];
