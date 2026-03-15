import React, { useState } from "react";
import "./App.css";

interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

const initialAssets: Asset[] = [
  { name: "Apple Inc.", symbol: "AAPL", value: 15000, change: 2.5 },
  { name: "Tesla Inc.", symbol: "TSLA", value: 8000, change: -1.2 },
  { name: "Bitcoin", symbol: "BTC", value: 5000, change: 5.7 },
];

function App() {
  const [assets, setAssets] = useState<Asset[]>(initialAssets);

  const handleUpdate = (updatedAsset: Asset) => {
    setAssets((prevAssets) =>
      prevAssets.map((asset) =>
        asset.symbol === updatedAsset.symbol ? updatedAsset : asset,
      ),
    );
  };

  return (
    <>
      <h1>Portfolio Dashboard</h1>
      <PortfolioSummary assets={assets} />
      <PortfolioList assets={assets} />
      <hr />
      <h2>Edit Asset</h2>
      <AssetEditor onUpdate={handleUpdate} />
    </>
  );
}

export const PortfolioSummary: React.FC<{ assets: Asset[] }> = ({ assets }) => {
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  const averageChange =
    assets.length > 0
      ? assets.reduce((sum, asset) => sum + asset.change, 0) / assets.length
      : 0;

  return (
    <div>
      <h2>Portfolio Summary</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <p>Average Change: {averageChange.toFixed(2)}%</p>
    </div>
  );
};

export const PortfolioList: React.FC<{ assets: Asset[] }> = ({ assets }) => (
  <ul>
    {assets.map((asset) => (
      <li key={asset.symbol}>
        {asset.name} ({asset.symbol}): ${asset.value.toFixed(2)} (
        {asset.change.toFixed(2)}%)
      </li>
    ))}
  </ul>
);

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = {
    name: "",
    symbol: "",
    value: 0,
    change: 0,
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value });
  };

  handleSymbolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ symbol: event.target.value.toUpperCase() });
  };

  handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: Number(event.target.value) });
  };

  handleChangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ change: Number(event.target.value) });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, symbol, value, change } = this.state;

    this.props.onUpdate({
      name: name.trim(),
      symbol: symbol.trim().toUpperCase(),
      value,
      change,
    });

    this.setState({ name: "", symbol: "", value: 0, change: 0 });
  };

  render() {
    const { name, symbol, value, change } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Asset name"
          required
        />
        <input
          name="symbol"
          value={symbol}
          onChange={this.handleSymbolChange}
          placeholder="Symbol"
          required
        />
        <input
          name="value"
          type="number"
          value={value}
          onChange={this.handleValueChange}
          placeholder="Value"
          required
        />
        <input
          name="change"
          type="number"
          value={change}
          onChange={this.handleChangeChange}
          placeholder="Change %"
          required
        />
        <button type="submit">Update Asset</button>
      </form>
    );
  }
}

export default App;
