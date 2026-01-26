
type TransactionType = "checkout" | "return" | "cancelled" | "priority"

type Transaction = {
  id: number;
  type: TransactionType;
};

const transactions: Transaction[] = [
  { id: 1, type: "checkout" },
  { id: 2, type: "cancelled" },
  { id: 3, type: "return" },
  { id: 4, type: "priority" },
  { id: 5, type: "checkout" },
  { id: 6, type: "return" },
  { id: 7, type: "checkout" },
  { id: 8, type: "cancelled" },
  { id: 9, type: "return" },
  { id: 10, type: "checkout" },
  { id: 11, type: "priority" },
  { id: 12, type: "return" },
  { id: 13, type: "checkout" }
];

const counter: Record<TransactionType, number> = {
  "checkout": 0,
  "priority": 0,
  "cancelled": 0,
  "return": 0
}

for (const transaction of transactions) {
  counter[transaction.type] += 1;
}

console.log({ counter })

{
  let i = 0
  while (true) {
    if (transactions.length > i) {
      if (transactions[i]!.type === "priority") {
        console.log(`found priority transition at ${i} index`)
        break;
      }
    } else {
      console.log("no priority transition is found,loop terminated")
      break;
    }
    i++;
  }
}

console.log("while(true) is done")

const transactionsQueue: Transaction[] = []
{
  let i = 0
  do {
    if (transactions[i]!.type === "priority") {
      transactionsQueue.push(transactions[i]!)
    }
    i++;
  } while (i < transactions.length)
}
console.log({ transactionsQueue })

let inventory: { [title: string]: number } = {
  "The Hobbit": 3,
  "1984": 5,
  "TypeScript Guide": 2
};

for (const title in inventory) {
  inventory[title] = 0
}


console.log({ inventory })

const visitors: string[] = ["Alice", "Bob", "Carol"];
for (const visitor of visitors.reverse()) {
  console.log(visitor);
}


// bun tsr ex - 11.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run ex-11.ts' "ex-11.ts"
// {
//   counter: {
//     checkout: 5,
//       priority: 2,
//         cancelled: 2,
//     return: 4,
//   },
// }
// found priority transition at 3 index
// while (true) is done
// {
//   transactionsQueue: [
//     {
//       id: 4,
//       type: "priority",
//     }, {
//       id: 11,
//       type: "priority",
//     }
//   ],
// }
// {
//   inventory: {
//     "1984": 0,
//       "The Hobbit": 0,
//         "TypeScript Guide": 0,
//   },
// }
// Carol
// Bob
// Alice
//  ~/pr/pin / 1 - typescript - casestudies │ Faaris - cs!3                                                                                   ✔ │ 12:00: 36 AM 