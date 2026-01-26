class FeedbackBox<T> {
  private feedbacks: T[] = [];
  addFeedback(feedback: T) {
    this.feedbacks.push(feedback);
  }
  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
  getFirstItem(): T {
    if (this.feedbacks.length === 0) {
      throw new Error("No items in the feedback box");
    }
    return this.feedbacks[0]!;
  }
  getFirstItemGraceful(): T | undefined {
    return this.feedbacks[0];
  }
  removeFirstItem(): T | undefined {
    return this.feedbacks.shift();
  }
}

const quizFeedback = new FeedbackBox<string>();
try {
  console.log(quizFeedback.getFirstItem());
} catch (e) {
  console.error((e as Error).message);
}
quizFeedback.getFirstItemGraceful();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
console.log(quizFeedback.getAllFeedback());
console.log(quizFeedback.getFirstItem());
console.log(quizFeedback.removeFirstItem());
console.log(quizFeedback.getAllFeedback());

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-14.ts"
// No items in the feedback box
// ["Great quiz!", "Too hard!"]
// Great quiz!
// Great quiz!
// ["Too hard!"]
// Name: Eve, Age: Unknown
// Name: Frank, Age: 28
// Name: Grace, Age: not specified
// 90
// 80