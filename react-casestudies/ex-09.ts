// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/09-lazy-loading/

/*
Problem Statement:

EduStream wants to improve initial load time by loading only what users need.

• Loading entire app upfront slows initial experience.
• Most users only use a few features per session.

The challenge: Use dynamic `import()`, `React.lazy()`, and `Suspense` to implement route-based and component-based code splitting safely, with fallbacks and error boundaries.


Challenge (Interactive - "Your Turn"):

1. Create a `ProfileSettings` component that is only loaded when a user clicks "Settings" (use `React.lazy` and `Suspense`).
2. Add a route `/admin` that lazy-loads `AdminPanel` and handles loading errors with an error boundary.
*/