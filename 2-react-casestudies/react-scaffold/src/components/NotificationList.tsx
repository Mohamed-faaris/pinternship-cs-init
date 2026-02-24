import useNotificationStore from '../store/notificationStore';
import type { Notification } from '../store/notificationStore';

function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications);
  const markAsRead = useNotificationStore((state) => state.markAsRead);

  const unreadNotifications = notifications.filter((n: Notification) => !n.read);

  return (
    <div>
      <h3>Unread Notifications ({unreadNotifications.length})</h3>
      {unreadNotifications.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul>
          {unreadNotifications.map((notification: Notification) => (
            <li key={notification.id}>
              <span style={{ fontWeight: 'bold', color: notification.type === 'error' ? 'red' : notification.type === 'success' ? 'green' : 'blue' }}>
                [{notification.type.toUpperCase()}]
              </span>
              {' '}
              {notification.message}
              <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotificationList;
