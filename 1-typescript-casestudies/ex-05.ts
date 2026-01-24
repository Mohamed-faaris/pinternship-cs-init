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