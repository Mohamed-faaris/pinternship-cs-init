import { useReducer } from 'react';
import type { BudgetTrackerProps, BudgetState, BudgetAction, IncomeEntry, ExpenseEntry } from '../types';

function budgetReducer(state: BudgetState, action: BudgetAction): BudgetState {
  switch (action.type) {
    case 'addIncome': {
      const newBalance = state.balance + action.entry.amount;
      return {
        ...state,
        balance: newBalance,
        income: [...state.income, action.entry],
      };
    }
    case 'addExpense': {
      const newBalance = state.balance - action.entry.amount;
      if (newBalance < 0) {
        return state;
      }
      return {
        ...state,
        balance: newBalance,
        expenses: [...state.expenses, action.entry],
      };
    }
    default:
      return state;
  }
}

function BudgetTracker({ initialBalance }: BudgetTrackerProps) {
  const [state, dispatch] = useReducer(budgetReducer, {
    balance: initialBalance,
    income: [],
    expenses: [],
  });

  const handleAddIncome = () => {
    const entry: IncomeEntry = {
      id: Date.now().toString(),
      amount: 100,
      currency: 'USD',
    };
    dispatch({ type: 'addIncome', entry });
  };

  const handleAddExpense = () => {
    const entry: ExpenseEntry = {
      id: Date.now().toString(),
      amount: 50,
      currency: 'USD',
    };
    dispatch({ type: 'addExpense', entry });
  };

  return (
    <div>
      <h3>Budget Tracker</h3>
      <p>Balance: ${state.balance}</p>
      <button onClick={handleAddIncome}>Add Income ($100)</button>
      <button onClick={handleAddExpense}>Add Expense ($50)</button>
      <div>
        <h4>Income ({state.income.length})</h4>
        <h4>Expenses ({state.expenses.length})</h4>
      </div>
    </div>
  );
}

export default BudgetTracker;
