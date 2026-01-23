// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/12-mastering-functions-in-typescript/

/*
Problem Statement:

The city library needs a Report Generator module to automate routine tasks:

• Display member details (ID, name, optional email).
• Calculate total fines for overdue books (variable number per member).
• Compute discounted membership fees with default rates.
• Register daily visitors via callback.
• Support different report formats via function overloading.

The challenge: How do you design well-typed, reusable functions in TypeScript using optional/default/rest parameters, overloads, and higher-order patterns to keep the Report Generator clean and flexible?


Challenge (Interactive - "Your Turn"):

1. Call `displayMember` for two members: one with email, one without.
2. Use `calculateFines` to sum fines: 5, 10, 2.5.
3. Compute a membership fee for $100 with default discount, then with 20%.
4. Greet visitors “Alice” and “Bob” using both `vipGreet` and `consoleGreet`.
5. Compute `factorial(5)`.
6. Generate a text report and a JSON report for an array of sample objects (e.g., `{ title: "1984" }`).


Programmer’s Workflow Checklist (Optional):

• Optional parameters must come last.
• Use rest parameters for variable-length arguments.
• Prefer explicit function types for callbacks for clarity.
*/