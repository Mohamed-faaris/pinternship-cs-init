// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/05-any-type-in-typescript/

/*
Problem Statement:

You are tasked with building a dynamic survey system for a large research organization.

• The survey questions and answers can change at any time.
• Some questions expect a number, others expect text, some allow multiple answers, and some are open-ended.
• The system must store and process answers of any shape, but you need to be careful not to lose track of what kind of data each answer holds.
• Later, you want to add type safety, but for now, the system must be flexible enough to accept any kind of answer.

The challenge: How do you design your survey system in TypeScript so it can handle unknown and changing data types, while still allowing you to gradually add type safety as the system matures?


Challenge (Interactive - "Your Turn"):

• Create a function `recordAnswer` that takes a question ID and an answer of any type, and stores it in an object.
• Add at least three answers: a string, a number, and an array.
• Print all recorded answers.


Programmer’s Workflow Checklist (Optional):

• Use `any` only when you don’t know the type.
• Replace `any` with a specific type as soon as you know the structure.
• Check the value’s type before using it.
• Document all uses of `any` for future refactoring.
*/

