# 🚀 Interview Questions Guide

Welcome to my Interview Questions Guide! 🎉

In this repository, I’ve gathered the **most frequently asked interview questions** based on my personal experience. The questions are mainly frontend-focused, but they cover **concepts that can apply to both frontend or even some for backend roles**. 

💡 **Tip**: While interviewers might not ask the exact question, the **concepts** and **patterns** in the questions will be relevant. So, it's a good idea to be hands-on with these concepts and have a solid understanding.

📝 **Note**: For a comprehensive collection of coding challenges, I highly recommend checking out the repositories listed above. You'll find a wide variety of coding questions to practice.

### ✨ Key Concepts to Focus On
- **Frontend**
- **General Programming Concepts**

### 🎯 Why Focus on These Questions?
These questions are designed to help you:
- Improve your **coding skills**.
- Get familiar with common concepts that interviewers love to test.
- Prepare yourself for **coding interviews**.

### 📝 Common Topics Covered:
- **JavaScript Basics**: Closures, Hoisting, Event Loop and so on..
- **HTML & CSS**: Flexbox, Grid, Semantic HTML
- **React**: Lifecycle Methods, Hooks, Redux
- **others Concepts**: REST APIs, Databases, Authentication


---

## 📌 Frontend Specific Questions

## 🧠 JavaScript Questions

### 1. What is a Prototype?

Every object in javascript has by default properties or hidden internal property and those properties called Prototype of that object, commonly accessed via `__proto__`.

> 🧬 The prototype is the mechanism by which JavaScript implements inheritance.

#### 🔍 Key Points:
- All objects in JavaScript inherit from a prototype.
- Functions have a `prototype` property that is used when creating new instances.
- The prototype chain continues until it reaches `null`.

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John');
john.sayHello(); // Hello, my name is John
```
#### 📌 Summary:
- A **prototype** is an object that other objects inherit properties from.
- It forms the foundation of **prototypal inheritance** in JavaScript.
  
### 2. What is Prototypal Inheritance?

Prototypal inheritance allows one object to inherit properties and methods from another object via the prototype chain.
- When you try to access a property on an object, JavaScript:
  1. Looks for it on the object itself.
  2. If not found, it follows the `__proto__` link (the `[[Prototype]]`) to the parent object.
  3. This process continues until it finds the property or reaches `null`.

This chain of inheritance is known as the **prototype chain**.

> 🧬 This is JavaScript’s way of achieving inheritance without classical classes.
> 
### 3. What is Just-In-Time (JIT) Compilation and How Does It Optimize Performance?

JIT (Just-In-Time) Compilation is a technique used by modern JavaScript engines like **V8**, **SpiderMonkey**, and **JavaScriptCore** to **convert JavaScript into machine code at runtime**—making execution significantly faster than traditional interpretation.

> 🚀 JIT helps JavaScript run faster by optimizing code while it runs, using real-time feedback from the program's behavior.

#### 🔧 Why is this important?

JavaScript is dynamically typed and interpreted, which can make it slower. JIT allows the engine to:
- Analyze code during execution.
- Apply runtime optimizations.
- Avoid repeated interpretation of the same logic.

---

### 🛠️ V8 Engine’s Two-Tier JIT System

V8 (used in **Chrome** and **Node.js**) uses **two compilers**:

| Compiler        | Role                              | Optimization Level | Uses Runtime Feedback | Can Deoptimize |
|----------------|-----------------------------------|--------------------|------------------------|----------------|
| 🔹 Ignition     | Baseline Interpreter               | Low                | ❌ No                  | ❌ No           |
| 🔹 TurboFan     | Optimizing JIT Compiler            | High               | ✅ Yes                 | ✅ Yes          |

#### 🔹 **Ignition (Baseline Interpreter)**
- Starts execution quickly.
- Converts JS into bytecode and interprets it line-by-line.
- Prioritizes fast startup over long-term performance.

#### 🔹 **TurboFan (Optimizing Compiler)**
- Kicks in once a function becomes “hot” (used frequently).
- Compiles hot functions into **highly optimized machine code**.
- Uses techniques like:
  - Type feedback
  - Inline caching
  - Hidden classes

---

### 🧪 Example: 

```js
function add(x, y) {
  return x + y;
}

for (let i = 0; i < 1_000_000; i++) {
  add(1, 2); // Hot path: optimized by TurboFan
}

add('a', 'b'); // Causes deoptimization (assumption breaks)
```
![image](https://github.com/user-attachments/assets/ac1ae0bf-878d-465b-9b47-ff63c405321f)

### 🎯 Performance Benefits

- **Fast Startup**: Ignition allows for immediate execution, reducing initial load times.
- **Adaptive Optimization**: By focusing resources on frequently executed code, TurboFan ensures that the most critical parts of the application run efficiently.
- **Efficient Memory Usage**: The separation of concerns between Ignition and TurboFan allows for optimized memory management, balancing between quick execution and deep optimization.


