// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/14-generics/

/*
Problem Statement:

EduFlow Academy is expanding its content types: quizzes, video lessons, coding exercises, and more. The development team notices they keep writing very similar code for handling lists of different content types, grading submissions, and managing feedback.

The problem: How do you create reusable, flexible tools that work with any kind of content or data, while keeping the safety and clarity of TypeScript’s types?

The challenge: Write generic classes and functions that adapt to different data types while preserving type safety.


Challenge (Interactive - "Your Turn"):

1. Write a generic class `FeedbackBox<T>` that stores feedback items of any type and lets you retrieve them all.
2. Write a generic function `getFirstItem<T>` that returns the first item from any array.


Programmer’s Workflow Checklist (Optional):

• Look for repeated code that only differs by data type.
• Replace specific types with generics (`<T>`).
• Use generics in classes and functions.
• Test with multiple data types to ensure flexibility and safety.
*/