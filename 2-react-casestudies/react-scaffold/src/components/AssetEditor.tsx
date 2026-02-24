import React from 'react';
import type { AssetEditorProps, AssetEditorState, Asset } from '../types';

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = {
    name: '',
    symbol: '',
    value: '',
    change: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const asset: Asset = {
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change),
    };
    this.props.onUpdate(asset);
    this.setState({ name: '', symbol: '', value: '', change: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add/Update Asset</h3>
        <input
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <input
          name="symbol"
          placeholder="Symbol"
          value={this.state.symbol}
          onChange={this.handleChange}
          required
        />
        <input
          name="value"
          type="number"
          placeholder="Value"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <input
          name="change"
          type="number"
          placeholder="% Change"
          value={this.state.change}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AssetEditor;
