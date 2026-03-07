import { create } from 'zustand';

interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
  isRead: boolean;
}

interface NotificationStore{
  notifications: Notification[];
  addNotification:(notification: Omit<Notification, 'id' | 'isRead'>) => void;
  markAsRead:(id: number) => void;
  clearNotifications:() => void;
}

const intialNotifications: Notification[] = [
  { id: 1, message: 'Welcome to the notification system!', type: 'info', isRead: false },
  { id: 2, message: 'Your profile has been updated successfully.', type: 'success', isRead: false },
  { id: 3, message: 'Failed to load data. Please try again later.', type: 'error', isRead: false },
  {id: 4, message: 'You have a new friend request.', type: 'info', isRead: false },
]

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: intialNotifications,
  addNotification: (notification) => set((state) => ({
    notifications: [...state.notifications, { ...notification, id: Date.now(), isRead: false }],
  })),
  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map((n) =>
      n.id === id ? { ...n, isRead: true } : n
    ),
  })),
  clearNotifications: () => set({ notifications: [] }),
}));



function App() {

  return <>
  <div>
    <h1>Notification System</h1>
    <button onClick={() => useNotificationStore.getState().addNotification({ message: 'New message received', type: 'info' })}>
      Add Notification
    </button>
    <button onClick={() => useNotificationStore.getState().clearNotifications()}>
      Clear Notifications
    </button>
    <table>
      <thead>
        <tr>
          <th>Message</th>
          <th>Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {useNotificationStore((state) => state.notifications).map((notification) => (
          <tr key={notification.id}>
            <td>{notification.message}</td>
            <td>{notification.type}</td>
            <td>
              <button onClick={() => useNotificationStore.getState().markAsRead(notification.id)}>
                {notification.isRead ? 'Read' : 'Unread'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </>;
}

export default App;
