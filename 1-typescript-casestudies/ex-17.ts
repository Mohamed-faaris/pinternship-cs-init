// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/17-classes-access-modifiers/

/*
Problem Statement:

EduFlow Academy needs to prevent learners from changing quiz questions, stop instructors from publishing unfinished lessons accidentally, and ensure admins can review but not accidentally modify published content.

The challenge: Design classes and use access modifiers (`public`, `private`, `protected`, `readonly`, abstract classes) so each role has the right level of access and shared features are coded once.


Challenge (Interactive - "Your Turn"):

• Create an `Assignment` class extending `Content`.
• Add a `dueDate` property (private).
• Allow only instructors to set or update the due date before publishing.
• Implement `getType()` returning `"Assignment"`.


Programmer’s Workflow Checklist (Optional):

• Use `private` for sensitive fields (questions, due dates).
• Use `protected` for members shared with subclasses.
• Expose safe actions via `public` methods.
• Test access by role (learner, instructor, admin).
*/