const checkSign = (num: number) => console.log(num < 0 ? "negative" : "positive")
const evenOrOdd = (num: number) => console.log(num % 2 == 0 ? "even" : "odd")
const getGrade = (score: number) => {
  if (score < 50) return "F"
  else if (score < 70) return "D"
  else if (score < 80) return "C"
  else if (score < 90) return "B"
  else if (score < 95) return "A"
  else return "O"
}

const provideFeedback = (grade: string) => {
  switch (grade) {
    case "O":
      console.log("outstanding")
      break
    case "A":
      console.log("good")
      break
    case "B":
      console.log("could be better")
      break
    case "C":
      console.log("needs improvement")
      break
    case "D":
      console.log("needs improvement")
      break
    case "F":
      console.log("fail")
      break

    default:
      console.log("enter valid grade")
  }
}

checkSign(10)
checkSign(-213)
evenOrOdd(1)
evenOrOdd(2)

provideFeedback(getGrade(32))
provideFeedback(getGrade(52))
provideFeedback(getGrade(82))
provideFeedback(getGrade(92))
provideFeedback(getGrade(99))
provideFeedback("U")

// ❯ bun tsr ex - 10.ts

// $ bun x tsc--noEmit && bun run "ex-10.ts"
// positive
// negative
// odd
// even
// fail
// needs improvement
// could be better
// good
// outstanding