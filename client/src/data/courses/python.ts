import type { Course } from '../types';

export const pythonCourse: Course = {
  id: "python-masterclass",
  categoryId: "programming",
  title: "Python",
  description: "A comprehensive Python course covering everything from basic syntax to Machine Learning, Data Structures, MySQL, and MongoDB. Real data structured from W3Schools.",
  thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
  modules: [
    {
      id: "python-mod-1-python_intro",
      title: "1. Python Intro",
      content: `## Python Intro

### What is Python?
Python is a popular programming language created by Guido van Rossum and released in 1991.

It is used for:
* Web development (server-side)
* Software development
* Mathematics & Data Science
* System scripting

### Why Python?
* Works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
* Simple syntax similar to the English language.
* Allows developers to write programs with fewer lines than other languages.
* Runs on an interpreter system (code executes as soon as it is written).

\`\`\`python
print("Hello, World!")
\`\`\`
`
    },
    {
      id: "python-mod-2-python_syntax",
      title: "2. Python Syntax",
      content: `## Python Syntax

### Execute Python Syntax
Python syntax can be executed directly in the Command Line:

\`\`\`python
>>> print("Hello, World!")
Hello, World!
\`\`\`

Or by running a script file:

\`\`\`bash
python myfile.py
\`\`\`

### Python Indentation
Indentation refers to the spaces at the beginning of a code line. Python uses indentation to indicate a block of code.

\`\`\`python
if 5 > 2:
    print("Five is greater than two!")
\`\`\`

Python will raise a SyntaxError if you skip indentation:

\`\`\`python
# Incorrect:
if 5 > 2:
print("Five is greater than two!")
\`\`\`
`
    },
    {
      id: "python-mod-3-python_comments",
      title: "3. Python Comments",
      content: `## Python Comments

Comments can be used to explain Python code, make it more readable, or prevent execution when testing code.

### Creating a Comment
Comments start with \`#\`, and Python will ignore them:

\`\`\`python
# This is a comment
print("Hello, World!")

print("Cheers, Mate!") # This is an inline comment
\`\`\`

### Multiline Comments
You can use a multiline string (\`"""\`) as a comment:

\`\`\`python
"""
This is a comment
written in more than just one line
"""
print("Hello, World!")
\`\`\`
`
    },
    {
      id: "python-mod-4-python_variables",
      title: "4. Python Variables",
      content: `## Python Variables

### Creating Variables
Variables are containers for storing data values. In Python, a variable is created the moment you first assign a value to it:

\`\`\`python
x = 5
y = "John"
print(x)
print(y)
\`\`\`

### Casting
If you want to specify the data type of a variable, this can be done with casting:

\`\`\`python
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
\`\`\`

### Get the Type
You can get the data type of any object using the \`type()\` function:

\`\`\`python
x = 5
y = "John"
print(type(x))
print(type(y))
\`\`\`
`
    },
    {
      id: "python-mod-5-python_datatypes",
      title: "5. Python Data Types",
      content: `## Python Data Types

### Built-in Data Types
Python has the following data types built-in by default:

* **Text Type**: \`str\`
* **Numeric Types**: \`int\`, \`float\`, \`complex\`
* **Sequence Types**: \`list\`, \`tuple\`, \`range\`
* **Mapping Type**: \`dict\`
* **Set Types**: \`set\`, \`frozenset\`
* **Boolean Type**: \`bool\`

\`\`\`python
x = "Hello World" # str
x = 20           # int
x = 20.5         # float
x = ["apple", "banana", "cherry"] # list
x = ("apple", "banana", "cherry") # tuple
x = {"name" : "John", "age" : 36} # dict
x = True         # bool
\`\`\`
`
    },
    {
      id: "python-mod-6-python_numbers",
      title: "6. Python Numbers & Random Module",
      content: `## Python Numbers

There are three numeric types in Python:
* \`int\` (e.g. \`1\`, \`-32555\`)
* \`float\` (e.g. \`2.8\`, \`-35.59\`)
* \`complex\` (e.g. \`3+5j\`)

\`\`\`python
x = 1    # int
y = 2.8  # float
z = 1j   # complex

# Type Conversion
a = float(x) # convert int to float
b = int(y)   # convert float to int
c = complex(x) # convert int to complex

# Random Numbers
import random
print(random.randrange(1, 10))
\`\`\`
`
    },
    {
      id: "python-mod-7-python_strings",
      title: "7. Python Strings & String Methods",
      content: `## Python Strings

Strings in Python are surrounded by either single quotation marks or double quotation marks.

\`\`\`python
a = "Hello, World!"
print(a[1]) # Access character at index 1 ('e')

# Loop through string
for x in "banana":
    print(x)

# String Length
print(len(a))

# Check string presence
txt = "The best things in life are free!"
if "free" in txt:
    print("Yes, 'free' is present.")
\`\`\`
`
    }
  ],
  assignment: {
    id: "python-assignment-1",
    title: "Python Master Certification Quiz",
    passingScore: 80,
    questions: [
      {
        id: "py-q1",
        text: "What symbol is used to start a single-line comment in Python?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: 2
      },
      {
        id: "py-q2",
        text: "How do you define a function in Python?",
        options: ["function myFunc()", "def myFunc():", "create myFunc()", "func myFunc()"],
        correctAnswer: 1
      },
      {
        id: "py-q3",
        text: "Which data type is returned by the `type([1, 2, 3])` function call?",
        options: ["tuple", "set", "list", "array"],
        correctAnswer: 2
      }
    ]
  }
};
