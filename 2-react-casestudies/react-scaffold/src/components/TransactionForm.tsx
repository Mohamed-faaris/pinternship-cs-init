import React from 'react';
import type { TransactionFormProps, TransactionFormState, Currency } from '../types';

class TransactionForm extends React.Component<TransactionFormProps, TransactionFormState> {
  state: TransactionFormState = { amount: '', currency: 'USD' };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit(Number(this.state.amount), this.state.currency);
    this.setState({ amount: '', currency: 'USD' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={this.state.amount}
          onChange={(e) => this.setState({ amount: e.target.value })}
          required
        />
        <select
          value={this.state.currency}
          onChange={(e) => this.setState({ currency: e.target.value as Currency })}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default TransactionForm;
