import type { Course } from '../types';

export const javaCourse: Course = {
  id: "java-masterclass",
  categoryId: "programming",
  title: "Java",
  description: "Master Java programming from basic syntax and Object-Oriented Concepts (OOP) to Collections, Exception Handling, and Multithreading.",
  thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80",
  modules: [
    {
      id: "java-mod-1-intro",
      title: "1. Java Introduction & Setup",
      content: `## Java Introduction

### What is Java?
Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers **Write Once, Run Anywhere (WORA)**.

### Key Features of Java:
* **Platform Independent**: Java code compiles into bytecode, which runs on any Java Virtual Machine (JVM).
* **Object-Oriented**: Everything in Java is an object (except primitive data types).
* **Robust & Secure**: Strong memory management, automatic garbage collection, and strict type checking.
* **Multithreaded**: Java supports concurrent execution of multiple threads for high-performance applications.

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`
`
    },
    {
      id: "java-mod-2-syntax-variables",
      title: "2. Syntax, Variables & Data Types",
      content: `## Java Syntax & Variables

### Variables in Java
In Java, every variable must be declared with a data type before it can be used:

* **Primitive Data Types**: \`int\`, \`double\`, \`float\`, \`char\`, \`boolean\`, \`byte\`, \`short\`, \`long\`
* **Non-Primitive Data Types**: \`String\`, Arrays, Classes, Interfaces

\`\`\`java
int myAge = 25;
double price = 19.99;
char grade = 'A';
boolean isStudent = true;
String name = "Alex";

System.out.println("Name: " + name + ", Age: " + myAge);
\`\`\`

### Type Casting
Converting one primitive data type into another:
* **Widening Casting (automatically)**: byte -> short -> char -> int -> long -> float -> double
* **Narrowing Casting (manually)**: double -> float -> long -> int -> char -> short -> byte

\`\`\`java
double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int (output: 9)
\`\`\`
`
    },
    {
      id: "java-mod-3-control-flow",
      title: "3. Control Flow & Loops",
      content: `## Control Flow in Java

### If-Else Statements
\`\`\`java
int score = 85;
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: C");
}
\`\`\`

### Switch Statements
\`\`\`java
int day = 3;
switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    case 3 -> System.out.println("Wednesday");
    default -> System.out.println("Weekend");
}
\`\`\`

### For & Enhanced For-Each Loops
\`\`\`java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String car : cars) {
    System.out.println(car);
}
\`\`\`
`
    },
    {
      id: "java-mod-4-oop-concepts",
      title: "4. Object-Oriented Programming (OOP)",
      content: `## Object-Oriented Programming in Java

Java OOP rests on four main pillars:

### 1. Encapsulation
Hiding internal states and requiring all interaction to occur through an object's methods.

\`\`\`java
public class Person {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }
}
\`\`\`

### 2. Inheritance
A class can inherit properties and methods from another class using the \`extends\` keyword.

\`\`\`java
class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Bark! Bark!");
    }
}
\`\`\`

### 3. Polymorphism & Abstract Classes
Ability to treat objects of different subclasses as instances of a common superclass.
`
    },
    {
      id: "java-mod-5-collections-exceptions",
      title: "5. Collections & Exception Handling",
      content: `## Java Collections Framework & Exception Handling

### Java Collections
* **List**: \`ArrayList\`, \`LinkedList\` (ordered collections)
* **Set**: \`HashSet\`, \`TreeSet\` (unique elements only)
* **Map**: \`HashMap\`, \`TreeMap\` (key-value pairs)

\`\`\`java
import java.util.ArrayList;
import java.util.HashMap;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");

HashMap<String, Integer> studentGrades = new HashMap<>();
studentGrades.put("Alice", 95);
studentGrades.put("Bob", 88);
\`\`\`

### Exception Handling (Try-Catch)
\`\`\`java
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[10]);
} catch (Exception e) {
    System.out.println("Something went wrong: " + e.getMessage());
} finally {
    System.out.println("Execution completed.");
}
\`\`\`
`
    }
  ],
  assignment: {
    id: "java-assignment-1",
    title: "Java Core Certification Quiz",
    passingScore: 80,
    questions: [
      {
        id: "java-q1",
        text: "Which keyword is used to inherit a class in Java?",
        options: ["implement", "extends", "inherits", "super"],
        correctAnswer: 1
      },
      {
        id: "java-q2",
        text: "What is the entry point method for any standalone Java application?",
        options: ["public void start()", "public static void main(String[] args)", "public void run()", "init()"],
        correctAnswer: 1
      },
      {
        id: "java-q3",
        text: "Which collection class guarantees unique elements with no duplicates?",
        options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
        correctAnswer: 2
      },
      {
        id: "java-q4",
        text: "Which of the following is NOT a primitive data type in Java?",
        options: ["int", "double", "String", "boolean"],
        correctAnswer: 2
      },
      {
        id: "java-q5",
        text: "Which block is always executed in exception handling regardless of an error?",
        options: ["try", "catch", "finally", "throw"],
        correctAnswer: 2
      }
    ]
  }
};
