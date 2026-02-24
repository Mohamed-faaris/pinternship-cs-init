import type { TransactionListProps, Transaction } from '../types';

function TransactionList({ transactions, onSelect }: TransactionListProps) {
  return (
    <ul>
      {transactions.map((tx: Transaction) => (
        <li key={tx.id} onClick={() => onSelect(tx.id)} style={{ cursor: 'pointer' }}>
          {tx.amount} {tx.currency} - {tx.date.toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
