interface Member {
  id: number;
  name: string;
  email?: string;
  fines?: number[];
}

const member1: Member = { id: 1, name: "alice", email: "alice@abc.com", fines: [5, 10, 2.5] };
const member2: Member = { id: 2, name: "bob", fines: [3, 7] };

const displayMember = (member: Member): void => {
  console.log(`ID: ${member.id}, Name: ${member.name} ${member.email ? `, Email: ${member.email}` : ""}`);
}

displayMember(member1);
displayMember(member2);

const calculateFinesHelper = (...fines: number[]): number => {
  return fines.reduce((total, fine) => total + fine, 0);
}

console.log(calculateFinesHelper(5, 10, 2.5));

const calculateFines = (member: Member): number => {
  if (!member.fines) return 0;
  return calculateFinesHelper(...member.fines);
}

console.log(member1, calculateFines(member1));
console.log(member2, calculateFines(member2));

const membershipFee = (baseFee: number, discountRate: number = 0.1): number => {
  return baseFee * (1 - discountRate);
}
console.log(100, membershipFee(100));
console.log(100, membershipFee(100, 0.2));

const visitorLog: Map<string, Member[]> = new Map();

const logVisitor = (member: Member, date: Date = new Date(), callback: (member: Member) => void): void => {
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;// yyyy-mm-dd
  console.log({date, dateString});
  if (!visitorLog.has(dateString)) {
    visitorLog.set(dateString, []);
  }
  visitorLog.get(dateString)!.push(member);
  callback(member);
}

const consoleGreet = (member: Member): void => {
  console.log(`Welcome to the library, ${member.name}!`);
}
const vipGreet = (member: Member): void => {
  console.log(`Welcome back, esteemed member ${member.name}!`);
}

logVisitor(member1, new Date(), consoleGreet);
logVisitor(member2, undefined, vipGreet);
console.log(visitorLog);

const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(5, factorial(5));
console.log(10, factorial(10));

const generateReport = (members: Member[], format: "text" | "json" = "text"): string => {
  if (format === "json") {
    return JSON.stringify(members);
  } else {
    return members.map(member => `ID: ${member.id}, Name: ${member.name} ${member.email ? `, Email: ${member.email}` : ""}`).join("\n");
  }
}
console.log(generateReport([member1, member2] ));
console.log(generateReport([member1, member2], "json"));

// ❯ bun tsr ex - 12.ts

// $ timeout - k 1s 1s sh - c 'bun x tsc --noEmit && bun run "$1"' -- "ex-12.ts"
// ID: 1, Name: alice, Email: alice @abc.com
// ID: 2, Name: bob
// 17.5
// {
//   id: 1,
//     name: "alice",
//       email: "alice@abc.com",
//         fines: [5, 10, 2.5],
// } 17.5
// {
//   id: 2,
//     name: "bob",
//       fines: [3, 7],
// } 10
// 100 90
// 100 80
// {
//   date: 2026-01 - 26T19: 12: 24.588Z,
//     dateString: "2026-01-27",
// }
// Welcome to the library, alice!
// {
//   date: 2026-01 - 26T19: 12: 24.590Z,
//     dateString: "2026-01-27",
// }
// Welcome back, esteemed member bob!
// Map(1) {
//   "2026-01-27": [
//     {
//       id: 1,
//       name: "alice",
//       email: "alice@abc.com",
//       fines: [5, 10, 2.5],
//     }, {
//       id: 2,
//       name: "bob",
//       fines: [3, 7],
//     }
//   ],
// }
// 5 120
// 10 3628800
// ID: 1, Name: alice, Email: alice @abc.com
// ID: 2, Name: bob
// [{ "id": 1, "name": "alice", "email": "alice@abc.com", "fines": [5, 10, 2.5] }, { "id": 2, "name": "bob", "fines": [3, 7] }]
//  ~/pr/pin / 1 - typescript - casestudies │ Faaris - cs!1                                                                                   ✔ │ 12: 42: 24 AM 
//  * History restored 