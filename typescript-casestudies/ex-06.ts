// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/06-built-in-types-in-typescript/

/*
Problem Statement:

You are developing a financial analytics dashboard for a multinational company.

• You need to store and process numbers (balances, interest rates), strings (account names, currencies), booleans (active/inactive), and more.
• Some functions return nothing, some return computed values, and some data may be missing or intentionally absent.
• You must ensure that every value is validated and handled correctly, with no room for type confusion or runtime errors.

The challenge: How do you use TypeScript’s built-in types to model, validate, and process all the different kinds of data in a financial system, ensuring correctness and safety at every step?


Challenge (Interactive - "Your Turn"):

• Create a function `processTransaction` that takes an amount (number), a description (string), and a flag `isCredit` (boolean).
• If the amount is negative, the function should throw an error (never).
• If the description is missing, use `undefined` and handle it in the function.
• Print a summary of the transaction.


Programmer’s Workflow Checklist (Optional):

• Use explicit types for all variables and function parameters.
• Handle `null` and `undefined` explicitly to avoid bugs.
• Use `never` only for truly unreachable code.
• Prefer objects for structured data; use symbols for unique keys.
*/
