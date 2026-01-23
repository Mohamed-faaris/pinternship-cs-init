// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/15-advanced-types/

/*
Problem Statement:

ViBe’s dashboard must show learners’ progress, instructors’ engagement, and admins’ reports while handling varied and changing data shapes.

• Data shapes vary: some learners do only quizzes, others only videos.
• Some users have multiple roles; admins need combined reports.
• You must handle combining, filtering, and transforming data safely and flexibly.

The challenge: How do you use advanced TypeScript types (unions, intersections, mapped types, conditional types) to model and manipulate complex, real-world data safely and maintainably?


Challenge (Interactive - "Your Turn"):

1. Create a `type` called `InstructorOrAdmin` that can be either an `Instructor` or an `Admin`.
2. Given `Assignment = { title: string; dueDate: Date; points: number; }`, create a `ReadonlyAssignment` where none of the fields can be changed.
3. Given `LearnerStats = { quizzes: number; videos: number; assignments: number; }`, create a type `StatsAsStrings` that has the same keys but all values are strings.


Programmer’s Workflow Checklist (Optional):

• Use union for values that can be multiple forms.
• Use intersection when combining different roles/data.
• Use mapped and conditional types to transform and adapt types.
*/