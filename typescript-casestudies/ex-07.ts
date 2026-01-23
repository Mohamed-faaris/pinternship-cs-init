// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/07-user-defined-types-in-typescript/

/*
Problem Statement:

You are building a patient management system for a hospital.

• Each patient record must track personal details, vital signs, and medical history.
• Different types of staff (doctors, nurses, admins) interact with the system, each with different permissions and data needs.
• The system must handle collections of patients, structured medical records, and specialized data like test results or medication schedules.
• You need to ensure that all data is organized, type-safe, and easy to extend as requirements change.

The challenge: How do you use TypeScript’s user-defined types (arrays, tuples, enums, classes, interfaces) to model complex, real-world data in a way that is safe, maintainable, and scalable?


Challenge (Interactive - "Your Turn"):

• Define an enum `Role` for staff roles (Doctor, Nurse, Admin).
• Create an interface `Staff` with fields for `id`, `name`, and `role`.
• Create an array of staff members using the interface and enum.
• Write a function that prints a summary of all staff, showing their name and role.


Programmer’s Workflow Checklist (Optional):

• Use enums for related sets of constants.
• Define interfaces for all complex objects.
• Use arrays for collections of similar items.
• Use tuples for fixed-structure, ordered data.
• Use classes for objects that combine data and methods.
*/
