import { useReducer, useState } from "react";
import "./App.css";

type Currency = "INR" | "USD" | "EUR";

const conversionRate:Record<Currency, number> = {
  INR: 1,
  USD: 0.013,
  EUR: 0.011,
};

type Transaction = {
  amount: number;
  currency: Currency;
  type:"income" | "expense";
};

type TransactionSummary = {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
};

type budgetTrackerState = {
  transactions: Transaction[];
  summary: TransactionSummary;
};

type BudgetTrackerActions = 
 | {type: "income", payload: {amount: number, currency: Currency}}
 | {type: "expense", payload: {amount: number, currency: Currency}};

const budgetTrackerReducer = (state: budgetTrackerState, action: BudgetTrackerActions): budgetTrackerState => {
  switch(action.type){
    case "income": {
      const amountInINR = action.payload.amount * conversionRate[action.payload.currency];
      const updatedTransactions = [...state.transactions, {amount: action.payload.amount, currency: action.payload.currency, type: "income"}];
      const updatedSummary = {
        totalIncome: state.summary.totalIncome + amountInINR,
        totalExpense: state.summary.totalExpense,
        netBalance: state.summary.netBalance + amountInINR,
      };
      return {
        transactions: updatedTransactions,
        summary: updatedSummary,
      };
    }
    case "expense": {
      const amountInINR = action.payload.amount * conversionRate[action.payload.currency];
      const updatedTransactions = [...state.transactions, {amount: action.payload.amount, currency: action.payload.currency, type: "expense"}];
      const updatedSummary = {
        totalIncome: state.summary.totalIncome,
        totalExpense: state.summary.totalExpense + amountInINR,
        netBalance: state.summary.netBalance - amountInINR,
      };
      return {
        transactions: updatedTransactions,
        summary: updatedSummary,
      };
    }
    default:
      return state;
  }
};

 const initialState: budgetTrackerState = {
  transactions: [],
  summary: {
    totalIncome: 0,
    totalExpense: 0,
    netBalance: 0,
  },
};


function App() {
  const [state, dispatch] = useReducer(budgetTrackerReducer, initialState);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState<Currency>("INR");
  const [type, setType] = useState<"income" | "expense">("income");
  const [summaryCurrency, setSummaryCurrency] = useState<Currency>("INR");
  return <>
  <h1>Budget Tracker</h1>
  <div>
    <h2>Summary</h2>
    <select value={summaryCurrency} onChange={(e) => setSummaryCurrency(e.target.value as Currency)}>
      <option value="INR">INR</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
    <p>Total Income: {state.summary.totalIncome.toFixed(2)*conversionRate[summaryCurrency]} {summaryCurrency}</p>
    <p>Total Expense: {state.summary.totalExpense.toFixed(2)*conversionRate[summaryCurrency]} {summaryCurrency}</p>
    <p>Net Balance: {state.summary.netBalance.toFixed(2)*conversionRate[summaryCurrency]} {summaryCurrency}</p>
  </div>
  <div>
    <h2>transations</h2>
    <ul>
      {state.transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.type.toUpperCase()}: {transaction.amount} {transaction.currency}
        </li>
      ))}
    </ul>
  </div>
  <div>
    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
    <select value={currency} onChange={(e) => setCurrency(e.target.value as Currency)}>
      <option value="INR">INR</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>
   <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
    <button onClick={() => {
      const amountNum = parseFloat(amount);
      if (!isNaN(amountNum)) {
        dispatch({type, payload: {amount: amountNum, currency}});
        setAmount("");
      }
    }}>Add Transaction</button>
  </div>
  </>;
}

export default App;
