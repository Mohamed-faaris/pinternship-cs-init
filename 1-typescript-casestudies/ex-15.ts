
//from src
// Basic user types
type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

type Assignment = { title: string; dueDate: Date; points: number; };

type LearnerStats = { quizzes: number; videos: number; assignments: number; };

//code
type InstructorOrAdmin = Instructor | Admin;
type ReadonlyAssignment = Readonly<Assignment>;
type StatsAsStrings = { [K in keyof LearnerStats]: string; };

//console logs 
const instructor: InstructorOrAdmin = { id: "inst1", coursesTaught: 5 };
const admin: InstructorOrAdmin = { id: "admin1", accessLevel: "super" };

const assignment: ReadonlyAssignment = {
  title: "TypeScript Advanced Types",
  dueDate: new Date("2024-12-31"),
  points: 100,
};

const stats: StatsAsStrings = {
  quizzes: "10",
  videos: "5",
  assignments: "3",
};

console.log(instructor);
console.log(admin);
console.log(assignment);
console.log(stats);

// ❯ bun tsr ex - 15.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-15.ts"
// {
//   id: "inst1",
//     coursesTaught: 5,
// }
// {
//   id: "admin1",
//     accessLevel: "super",
// }
// {
//   title: "TypeScript Advanced Types",
//     dueDate: 2024 - 12 - 31T00:00:00.000Z,
//       points: 100,
// }
// {
//   quizzes: "10",
//     videos: "5",
//       assignments: "3",
// }
//  ~/pr/pin / 1 - typescript - casestudies │ Faaris - cs ⇡1!1                                                                         

