// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/08-memoization/

/*
Problem Statement:

StreamVision displays video analytics where expensive computations and re-renders slow down the UI.

• Charts and overlays are expensive to compute and render.
• User actions can trigger unnecessary re-renders.

The challenge: Use `useMemo`, `useCallback`, and `React.memo` to optimize rendering and avoid stale closures while keeping correct behavior.


Challenge (Interactive - "Your Turn"):

1. Create a `TagList` component that uses `useMemo` for filtering and is wrapped in `React.memo`.
2. Create a `TagInput` component that receives a memoized `onAddTag` callback via `useCallback`.
*/