// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/08-null-vs-undefined/

/*
Problem Statement:

You are building a real-time user profile dashboard for a social platform.

• Some users may not have filled out all their profile details (like age or bio).
• Sometimes, you need to show that a value is “intentionally empty” (e.g., user hasn’t set their age), while other times a value is simply “not yet set” (e.g., waiting for data from the server).
• Your code must handle both situations safely, avoiding runtime errors and making it clear to other developers what each value means.

The challenge: How do you use `null` and `undefined` in TypeScript to clearly represent the difference between “no value” and “not yet set,” and how do you handle these values in user data and logic?


Challenge (Interactive - "Your Turn"):

• Define a type `Profile` with `username` (string), `bio` (string or null), and optional `avatarUrl` (string).
• Create two profiles: one with a null bio and no avatar, and one with both fields set.
• Write a function `showProfile` that prints the username, a default message if bio is null, and a default avatar if `avatarUrl` is undefined.


Programmer’s Workflow Checklist (Optional):

• Use `null` for fields that are intentionally empty.
• Use `undefined` for optional or not-yet-initialized fields.
• Always check for both `null` and `undefined` before using a value.
• Provide sensible defaults when displaying or using possibly missing values.
*/
