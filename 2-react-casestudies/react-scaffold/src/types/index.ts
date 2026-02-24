export interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

export interface PortfolioSummaryProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
}

export interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

export interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

export type Currency = 'USD' | 'EUR';

export interface Transaction {
  id: string;
  amount: number;
  currency: Currency;
  date: Date;
}

export interface TransactionListProps {
  transactions: Transaction[];
  onSelect: (id: string) => void;
}

export interface TransactionFormProps {
  onSubmit: (amount: number, currency: Currency) => void;
}

export interface TransactionFormState {
  amount: string;
  currency: Currency;
}

export interface IncomeEntry {
  id: string;
  amount: number;
  currency: Currency;
}

export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: Currency;
}

export interface BudgetState {
  balance: number;
  income: IncomeEntry[];
  expenses: ExpenseEntry[];
}

export type BudgetAction =
  | { type: 'addIncome'; entry: IncomeEntry }
  | { type: 'addExpense'; entry: ExpenseEntry };

export interface BudgetTrackerProps {
  initialBalance: number;
}
