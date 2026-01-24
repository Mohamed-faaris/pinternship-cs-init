
const accounts: Map<string, number> = new Map();

accounts.set("001",1000)
accounts.set("002",2500)
accounts.set("003",3000)

function processTransaction(amount:number,description:string|undefined,isCredit:boolean){
  if(amount < 0){
    throw new Error("Amount cannot be negative");
  }
  const type = isCredit ? "Credit" : "Debit";
  const desc = description ?? "No description provided";
  console.log(`Transaction Summary: 
  Type: ${type}
  Amount: ${amount}
  Description: ${desc}`);
}

function processPaymentFromAccount(accountId:string,amount:number,description:string|undefined,processType:"withdraw"|"deposit"){
  const balance = accounts.get(accountId);
  if(balance === undefined){
    throw new Error("Account not found");
  }
  if(processType == "withdraw" && balance < amount){
    throw new Error("Insufficient balance");
  }
  if(processType == "withdraw"){
    accounts.set(accountId,balance - amount);
    processTransaction(amount,description,false);
  } else {
    accounts.set(accountId,balance + amount);
    processTransaction(amount,description,true);
  }
}

processPaymentFromAccount("001",200,"Grocery Shopping","withdraw");
processPaymentFromAccount("002",500,"Salary Deposit","deposit");
processPaymentFromAccount("002",500,undefined,"deposit");


// ❯ bun tsr ex-06.ts

// $ bun x tsc --noEmit && bun run "ex-06.ts"
// Transaction Summary: 
//   Type: Debit
//   Amount: 200
//   Description: Grocery Shopping
// Transaction Summary: 
//   Type: Credit
//   Amount: 500
//   Description: Salary Deposit
// Transaction Summary: 
//   Type: Credit
//   Amount: 500
//   Description: No description provided