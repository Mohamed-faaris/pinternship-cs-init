// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/05-any-type-in-typescript/

interface Question = {
  questionId : string,
  questionText: string,
  answer:any
};

questions:Question[] = [];

function recordAnswer(questionId:string, questionText:string, answer:<type>)<type>{
  questions.push({questionId, questionText, answer});
}

function printAllAnswers(){
  console.log(questions);
}

recordAnswer<string>("001","your name?","faaris");
recordAnswer<number>("002","your name?","20");
recordAnswer<array<string>>("003","list 3 food",["apple","idly","dosa"]);

printAllAnswers()
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

/*
# Any type in Typescript

Learn about Any type in Typescript

...

# The `any` Type in TypeScript

## 1. Problem Statement

You are tasked with building a dynamic survey system for a large research organization.

• The survey questions and answers can change at any time.
• Some questions expect a number, others expect text, some allow multiple answers, and some are open-ended.
• The system must store and process answers of any shape, but you need to be careful not to lose track of what kind of data each answer holds.
• Later, you want to add type safety, but for now, the system must be flexible enough to accept any kind of answer.

The challenge:How do you design your survey system in TypeScript so it can handle unknown and changing data types, while still allowing you to gradually add type safety as the system matures?

...

# The `any` Type in TypeScript

## 2. Learning Objectives

• Understand the purpose and use-cases for the `any` type in TypeScript.
• Declare and use variables that can hold any kind of value.
• Recognize the risks and trade-offs of using `any`.
• Plan for transitioning from `any` to safer types as requirements become clearer.

## 3. Concept Introduction with Analogy

## Analogy: The Universal Inbox

Imagine your office has a universal inbox where anyone can drop off any kind of item: letters, packages, keys, or even a pizza.

• The inbox is flexible and accepts everything, but you have to be careful when you take something out, because you never know what you’ll get.
• If you want to sort items later, you’ll need to check what each item is before using it.

The `any` type in TypeScript is like this universal inbox: it’s flexible, but you lose the safety of knowing exactly what’s inside.

...

# The `any` Type in TypeScript

## 4. Technical Deep Dive

• The `any` type disables type checking for a variable.
• You can assign any value to a variable of type `any`.
• Operations on `any`-typed variables are not checked by the compiler.
• Use `any` when you don’t know the type in advance, but plan to replace it with a specific type as soon as possible.

Syntax:

```
let answer: any;
answer = 42;
answer = "blue";
answer = [1, 2, 3];
```

...

# The `any` Type in TypeScript

## 5. Step-by-Step Data Modeling & Code Walkthrough

1. Declare a survey answer variable with `any`:

```
let surveyAnswer:  any;
```

2. Assign different types of values:

```
surveyAnswer = "Yes";
surveyAnswer = 5;
surveyAnswer = ["Option A", "Option B"];
```

3. Store answers in an array:

```
let allAnswers: any[] = [];
allAnswers.push("No");
allAnswers.push(10);
allAnswers.push({ comment: "N/A" });
```

4. Process answers (with caution):

```
for (let ans of allAnswers) {
  console.log("Received answer:", ans);
}
```

...

# The `any` Type in TypeScript

## 6. Interactive Challenge

Your Turn!

• Create a function `recordAnswer` that takes a question ID and an answer of any type, and stores it in an object.
• Add at least three answers: a string, a number, and an array.
• Print all recorded answers.

## 7. Common Pitfalls & Best Practices

• Avoid using `any` unless truly necessary.
• Document why you’re using `any` and plan to replace it.
• Type-check values before using them (e.g., with `typeof`).
• Use `unknown` if you want to force type checking before use.

## 8. Quick Recap & Key Takeaways

• The `any` type is flexible but removes type safety.
• Use `any` for dynamic or unknown data, but prefer specific types when possible.
• Always validate or check the type of `any` values before using them.

...

# The `any` Type in TypeScript

## 9. Optional: Programmer’s Workflow Checklist

• Use `any` only when you don’t know the type.
• Replace `any` with a specific type as soon as you know the structure.
• Check the value’s type before using it.
• Document all uses of `any` for future refactoring.

...

# The `any` Type in TypeScript

## Additional Links
- [Introduction](https://sudarshansudarshan.github.io/pinternship/intro/)
- [Case Studies](https://sudarshansudarshan.github.io/pinternship/case-studies/)
- [Projects](https://sudarshansudarshan.github.io/pinternship/projects/)
- [←](https://sudarshansudarshan.github.io/pinternship/case-studies/04-let-const/)
- [→](https://sudarshansudarshan.github.io/pinternship/case-studies/06-built-in-types-in-typescript/)
- [←](https://sudarshansudarshan.github.io/pinternship/case-studies/04-let-const/)
- [→](https://sudarshansudarshan.github.io/pinternship/case-studies/06-built-in-types-in-typescript/)

...
# The `any` Type in TypeScript

![Data Types](https://www.tutorialspoint.com/typescript/images/data_types.jpg)

## 1. Problem Statement
...
## 2. Learning Objectives
...
## 3. Concept Introduction with Analogy

## Analogy: The Universal Inbox
...
## 4. Technical Deep Dive
...
## 5. Step-by-Step Data Modeling & Code Walkthrough
...
## 6. Interactive Challenge
...
## 7. Common Pitfalls & Best Practices
...
## 8. Quick Recap & Key Takeaways
...
## 9. Optional: Programmer’s Workflow Checklist
...
## Additional Links
...
[Pinternship](https://sudarshansudarshan.github.io/pinternship/)
# Any type in Typescript
...
# The `any` Type in TypeScript
...
*/

