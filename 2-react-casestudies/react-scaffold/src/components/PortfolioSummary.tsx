import type { PortfolioSummaryProps, Asset } from '../types';

function PortfolioSummary({ assets, onRemove }: PortfolioSummaryProps) {
  const totalValue = assets.reduce((sum: number, asset: Asset) => sum + asset.value, 0);
  const avgChange = assets.length > 0
    ? assets.reduce((sum: number, asset: Asset) => sum + asset.change, 0) / assets.length
    : 0;

  return (
    <div>
      <h2>Portfolio Summary</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
      <p>Average Change: {avgChange.toFixed(2)}%</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Value</th>
            <th>Change</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset: Asset) => (
            <tr key={asset.symbol}>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.value.toFixed(2)}</td>
              <td style={{ color: asset.change >= 0 ? 'green' : 'red' }}>
                {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}%
              </td>
              <td>
                <button onClick={() => onRemove(asset.symbol)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioSummary;
