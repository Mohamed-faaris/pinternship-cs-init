class FeedbackBox<T> {
  private feedbacks: T[] = [];
  addFeedback(feedback: T) {
    this.feedbacks.push(feedback);
  }
  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
  getFirstItem(): T | undefined{
    return this.feedbacks[0]!;
  }
  
  removeFirstItem(): T | undefined {
    return this.feedbacks.shift();
  }
}

const quizFeedback = new FeedbackBox<string>();

quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
console.log(quizFeedback.getAllFeedback());
console.log(quizFeedback.getFirstItem());
console.log(quizFeedback.removeFirstItem());
console.log(quizFeedback.getAllFeedback());

const firstItem = <T>(items: T[]): T | undefined => {
  return items[0];
};

console.log(firstItem<number>([10, 20, 30]));
console.log(firstItem<string>(["apple", "banana", "cherry"]));

// $ timeout -k 1s 1s sh -c 'bun x tsc --noEmit && bun run "$1"' -- "ex-14.ts"
// ["Great quiz!", "Too hard!"]
// Great quiz!
// Great quiz!
// ["Too hard!"]
// 10
// apple