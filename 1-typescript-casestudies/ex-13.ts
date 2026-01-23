// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/13-optional-and-default-parameters-in-typescript/

/*
Problem Statement:

You are building a Flexible Greeting System for a social app. The system must:

• Greet users by name.
• Optionally include their age if provided.
• Use a default age when none is given.
• Handle missing or undefined parameters gracefully.

The challenge: How do you design functions that safely handle optional and default parameters in TypeScript, avoid errors, and provide clear behavior for omitted values?


Challenge (Interactive - "Your Turn"):

1. `describePerson` — Required: `name: string`, Optional: `age?: number`. Print "Name: <name>, Age: <age>" or "Name: <name>, Age: Unknown".
2. `calculatePrice` — Required: `basePrice: number`, Default: `discount: number = 0.1`. Return price after discount.
3. Test calls as described (e.g., `describePerson("Eve")`, `calculatePrice(100)`).


Programmer’s Workflow Checklist (Optional):

• Place optional/default parameters after required ones.
• Do not combine `?` and `=` on the same parameter.
• Use type guards to handle `undefined` optional values.
*/