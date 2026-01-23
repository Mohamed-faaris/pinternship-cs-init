// Source: https://sudarshansudarshan.github.io/pinternship/case-studies/04-state-management-in-react/

/*
Problem Statement:

TaskFlow is a project management app with global state needs.

• Users can add/edit/complete tasks from anywhere.
• Theme and user profile must be available globally.
• Avoid prop drilling and performance issues.

The challenge: How do you architect state management so global data is accessible, type-safe, and performant—using Context Providers and Zustand where appropriate?


Challenge (Interactive - "Your Turn"):

1. Create a Zustand store for notifications with `addNotification`, `markAsRead`, `clearNotifications`.
2. Use the store in a `NotificationList` component to display unread notifications and mark them as read.
*/