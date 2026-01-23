// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/02-tsx-typed-components-type-safety/

/*
Problem Statement:

A financial institution is building a React dashboard to handle high-stakes transactions.

• Transaction records must have strictly typed properties.
• Balance calculations must prevent type mismatches.
• Audit logs require immutable state with strict type checks.

The challenge: How do you enforce type safety at every level—props, state, events, and API responses—while maintaining React’s flexibility?


Challenge (Interactive - "Your Turn"):

1. Build a typed `TransactionList` component and a `TransactionForm` class component that submits typed transactions.
2. Implement a `BudgetTracker` component using `useReducer` with typed actions to prevent negative balances.
*/