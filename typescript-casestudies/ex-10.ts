// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/10-conditional-logic-in-typescript/

/*
Problem Statement:

A school portal needs a Student Performance Evaluator module. It must:

• Check exam eligibility based on attendance.
• Determine pass/fail status by score.
• Assign letter grades (A–F) using score ranges.
• Provide feedback messages for each grade.

Manual spreadsheet rules have become error-prone and hard to update. You need clear, maintainable code that handles each decision point correctly.

The challenge: How do you write clear, testable conditional logic in TypeScript (if, if…else, else if, switch) so your decision rules are correct and maintainable?


Challenge (Interactive - "Your Turn"):

Implement four small functions to practice each decision-making construct:

1. `checkSign(num: number): void` — Use an `if` statement to log whether `num` is positive.
2. `evenOrOdd(num: number): void` — Use an `if…else` to log whether `num` is even or odd.
3. `getGrade(score: number): string` — Use an `if…else if…else` ladder to return a letter grade (`A`..`F`).
4. `provideFeedback(grade: string): void` — Use a `switch` to log a feedback message for each grade, with a `default`.


Programmer’s Workflow Checklist (Optional):

• Use strict equality `===` for comparisons to avoid coercion bugs.
• Always include a `default` in `switch` statements.
• Order `else if` from most to least restrictive.
*/