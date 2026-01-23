// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/04-let-const/

/*
Problem Statement:

Imagine you are developing a modern application where data must be handled safely and predictably.

• Some values should be able to change as your program runs (like a user’s score or the current page).
• Other values should never change once set (like a mathematical constant or the name of your application).
• You want to avoid bugs caused by accidentally changing or reusing variables in the wrong place.

The challenge: How do you declare variables in TypeScript so that you control where and how they can be changed, and prevent accidental mistakes in your code?


Challenge (Interactive - "Your Turn"):

• Declare a variable `score` with `let` and assign it a number.
• Inside a block (e.g., an `if` statement), declare another `score` variable with a different value and print it.
• Declare a constant `COUNTRY` and assign it your favorite country.
• Try to change the value of `COUNTRY` and observe what happens.
• Try to re-declare `score` in the same block and see the result.


Programmer’s Workflow Checklist (Optional):

• Use `let` for variables that may change.
• Use `const` for variables that should never change.
• Never redeclare a variable with `let` or `const` in the same scope.
• Always initialize `const` variables.
• Keep variable scope as small as possible (prefer block scope).
• Test variable access inside and outside blocks to understand scope.
*/

