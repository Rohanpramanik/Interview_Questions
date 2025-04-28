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

![image](https://github.com/user-attachments/assets/59981cb1-bf54-473b-9520-416fc234b24c)


### 2. What is Prototypal Inheritance?

Prototypal inheritance allows one object to inherit properties and methods from another object via the prototype chain.
- When you try to access a property on an object, JavaScript:
  1. Looks for it on the object itself.
  2. If not found, it follows the `__proto__` link (the `[[Prototype]]`) to the parent object.
  3. This process continues until it finds the property or reaches `null`.

This chain of inheritance is known as the **prototype chain**.

> 🧬 This is JavaScript’s way of achieving inheritance without classical classes.
> 
...Loading
