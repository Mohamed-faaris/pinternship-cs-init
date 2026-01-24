var score = 84;
console.log(score)
if (true) {
    score = 95; 
    console.log(score)
}
console.log(score)

const COUNTRY = "india";
// COUNTRY = "usa"


// ❯ bun tsr ex-04.ts

// $ bun x tsc --noEmit && bun run "ex-04.ts"
// ex-04.ts:11:1 - error TS2588: Cannot assign to 'COUNTRY' because it is a constant.

// 11 COUNTRY = "usa"
//    ~~~~~~~


// Found 1 error in ex-04.ts:11

// ❯ bun tsr ex-04.ts

// $ bun x tsc --noEmit && bun run "ex-04.ts"
// 84
// 95
// 95