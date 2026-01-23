// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/01-tsx-typed-components/

/*
Problem Statement:

You’re building a financial portfolio dashboard.

• Each asset card must show a name, symbol, current value, and percentage change with strict type safety.
• Users can add, remove, or update assets, and the UI must prevent type errors.
• Some components are stateless, others manage complex state.
• Avoid runtime bugs from missing or mistyped props, and ensure state is managed correctly.

The challenge: How do you ensure every React component—functional or class—has strictly typed props and state so the UI is robust, maintainable, and error-free?


Challenge (Interactive - "Your Turn"):

1. Create a `PortfolioSummary` functional component that receives a typed array of assets and renders total value and average change.
2. Create an `AssetEditor` class component with typed state (`name`, `symbol`, `value`, `change`) and an `onUpdate` callback.
*/