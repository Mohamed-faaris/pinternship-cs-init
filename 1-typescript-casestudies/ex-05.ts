interface Question<T = any> {
  questionId: string;
  questionText: string;
  answer: T;
};

const questions: Question[] = [];

function recordAnswer<T>(questionId: string, questionText: string, answer: T): void {
  questions.push({ questionId, questionText, answer } as Question<T>);
}

function printAllAnswers() {
  console.log(questions);
}

recordAnswer<string>("001", "your name?", "faaris");
recordAnswer<number>("002", "your age?", 20);
recordAnswer<string[]>("003", "list 3 food", ["apple", "idly", "dosa"]);

printAllAnswers();

// ❯ bun tsr ex-05.ts

// $ bun x tsc--noEmit && bun run "ex-05.ts"
// [
//   {
//     questionId: "001",
//     questionText: "your name?",
//     answer: "faaris",
//   }, {
//     questionId: "002",
//     questionText: "your age?",
//     answer: 20,
//   }, {
//     questionId: "003",
//     questionText: "list 3 food",
//     answer: ["apple", "idly", "dosa"],
//   }
// ]