// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/09-type-aliases/

/*
Problem Statement:

You’re building a Warehouse Inventory System that must track products, orders, and storage locations. You need clear, reusable type definitions so the code is maintainable and self‐documenting. Without aliases, you’d repeat complex union or object types everywhere, leading to errors and duplication.

The challenge: How do you define and use type aliases in TypeScript to simplify complex type definitions, improve readability, and reduce duplication?


Challenge (Interactive - "Your Turn"):

• Define a `CustomerID` alias for `string`.
• Create a `Customer` object alias with `id: CustomerID`, `name: string`, and optional `email?: string`.
• Implement a `processOrder` function type alias that accepts `orderId: number` and a callback `(status: OrderStatus) => void`.
• Use the `Container<T>` generic to wrap a `Customer` object.


Programmer’s Workflow Checklist (Optional):

• Use aliases for primitives, unions, tuples, objects, and functions.
• Prefer clear, meaningful alias names.
• Use generics to parameterize aliases when appropriate.
*/
