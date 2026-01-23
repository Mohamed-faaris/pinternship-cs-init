// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/06-zustand-slices-and-modular-state-architecture/

/*
Problem Statement:

DesignHub is a real-time collaborative design app where state must be modular and scalable.

• Each feature team manages its own slice (files, users, comments).
• Performance is critical—only components using changed state should re-render.

The challenge: How do you design modular Zustand slices, compose them into a single store, and apply middleware for persistence and devtools?


Challenge (Interactive - "Your Turn"):

1. Create a `notificationsSlice` with `notifications`, `addNotification`, `markAsRead`, `clearNotifications` and integrate into a combined store.
2. Build a `NotificationsPanel` component displaying unread notifications and allowing marking them as read.
*/