// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/11-mastering-loops-in-typescript/

/*
Problem Statement:

A city library needs a Transaction Processor that can handle hundreds of book check-ins, check-outs, and returns every day.

• Iterate through lists of transactions.
• Stop processing when a priority book arrives.
• Skip cancelled transactions.
• Tally total transactions per day.
• Process at least one pending return even if the queue is short.
• Summarize inventory and active visitors.

The challenge: How do you use the right loop constructs in TypeScript (`for`, `while`, `do…while`, `for…in`, `for…of`) to process and control complex transaction flows safely and efficiently?


Challenge (Interactive - "Your Turn"):

1. Add a counter for each transaction type (`checkout`, `return`, `priority`, `cancelled`) using a `for` loop and an object.
2. Use a `while(true)` infinite loop with a `break` condition when a new priority transaction arrives.
3. Modify a `do…while` loop to handle a dynamic queue (an array you can `push` new returns into).
4. Use `for…in` to reset all inventory counts to zero.
5. Display visitor names in reverse order using a `for` or `for…of` loop.


Programmer’s Workflow Checklist (Optional):

• Choose the right loop type for the task.
• Avoid infinite loops—ensure exit conditions.
• Test each loop with edge cases (empty arrays, single items).
*/