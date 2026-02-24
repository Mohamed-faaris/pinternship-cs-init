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
