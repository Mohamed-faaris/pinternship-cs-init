// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/07-advanced-state-management-with-zustand/

/*
Problem Statement:

CollabNotes is a real-time note-taking platform requiring persistence, middleware, and syncing.

• Notes and preferences must persist across sessions and be versionable.
• The app must log state changes for audit and support migrations.

The challenge: Use Zustand middleware (devtools, persist, immer) to build robust, persistent stores and integrate with React Query for async fetching.


Challenge (Interactive - "Your Turn"):

1. Create a persisted session store: `userId`, `token`, `expiresAt` (persist only `userId` and `token`, migrate to add `role`).
2. Implement a notes store with devtools and immer; add `addHistoryEntry` and `clearHistory` actions.
*/