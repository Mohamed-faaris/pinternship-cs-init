abstract class Content {
  protected isPublished: boolean;
  constructor(isPublished = false) {
    this.isPublished = isPublished;
  }
  publish() {
    this.isPublished = true;
  }
  abstract getType(): string;
}

class Assignment extends Content {
  private dueDate: Date;

  constructor(dueDate: Date, isPublished = false) {
    super(isPublished);
    this.dueDate = dueDate;
  }

  getType(): string {
    return "Assignment";
  }

  setDueDate(dueDate: Date, isInstructor: boolean) {
    if (this.isPublished) {
      throw new Error("already published")
    }
    if (!isInstructor) {
      throw new Error("only instructor can set due date")
    }
    this.dueDate = dueDate;
  }
}

const Assignment1 = new Assignment(new Date())
const Assignment2 = new Assignment(new Date(), true)

console.log(Assignment1.getType())

try {
  Assignment1.setDueDate(new Date(), false)
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error", error);
  }
}

try {
  Assignment2.setDueDate(new Date(), true)
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error", error);
  }
}

try {
  Assignment1.setDueDate(new Date(), true)
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error", error);
  }
}

// ❯ bun tsr ex - 17.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-17.ts"
// Assignment
// only instructor can set due date
// already published