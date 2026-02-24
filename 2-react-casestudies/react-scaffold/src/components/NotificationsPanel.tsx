import { useStore } from '../store';
import type { Notification } from '../store';

function NotificationsPanel() {
  const notifications = useStore((state) => state.notifications);
  const addNotification = useStore((state) => state.addNotification);
  const markAsRead = useStore((state) => state.markAsRead);

  const unreadNotifications = notifications.filter((n: Notification) => !n.read);

  return (
    <div>
      <h3>Notifications Panel</h3>
      <button onClick={() => addNotification('New notification ' + Date.now())}>
        Add Notification
      </button>
      
      <h4>Unread ({unreadNotifications.length})</h4>
      {unreadNotifications.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul>
          {unreadNotifications.map((notification: Notification) => (
            <li key={notification.id}>
              {notification.message}
              <button onClick={() => markAsRead(notification.id)}>
                Mark as Read
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationsPanel;
