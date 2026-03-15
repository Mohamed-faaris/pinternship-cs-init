import { create } from "zustand";

export interface Comment {
  id: string;
  fileId: string;
  author: string;
  text: string;
}
export interface CommentSlice {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  getCommentsByFile: (fileId: string) => Comment[];
}
export const createCommentSlice = (set, get) => ({
  comments: [],
  addComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
  getCommentsByFile: (fileId) => get().comments.filter((c) => c.fileId === fileId),
});

interface Notification {
  id: number;
  message: string;
  type : "info" | "warning" | "error";
  isRead: boolean;
}

interface NotificationSlice{
  notifications: Notification[];
  addNotification: (message: string, type: "info" | "warning" | "error") => void;
  markAsRead: (id: number) => void;
  clearNotifications: () => void;
}

const initNofications:Notification[] = [
  { id: 1, message: "File uploaded successfully", type: "info", isRead: false },
  { id: 2, message: "Error processing file", type: "error", isRead: false },
  { id: 3, message: "New comment added", type: "info", isRead: true },
];

export const createNotificationSlice = (set):NotificationSlice => ({
  notifications: initNofications,
  addNotification: (message, type) =>
    set((state) => ({
      notifications: [
        ...state.notifications,
        { id: Date.now(), message, type, isRead: false }, 
      ],
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, isRead: true } : n
      ),
    })),
  clearNotifications: () => set({ notifications: [] }),
});

type useStore = NotificationSlice & CommentSlice;

const useStore = create<useStore>((set) => ({
  ...createCommentSlice(set, () => ({})),
  ...createNotificationSlice(set),
}));

export const NotificationList = () => {
  const notifications = useStore((state) => state.notifications);
  const markAsRead = useStore((state) => state.markAsRead);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          {notifications.map((n) => (
            <tr key={n.id} >
              <td>{n.message}</td>
              <td>{n.type}</td>
              <td><button onClick={() => markAsRead(n.id)} disabled={n.isRead}>Mark as Read</button></td>
            </tr>
          ))}
        </tr>
        </tbody>
      </table>
    </div>
  );
}


function App() {

  return <>
    <NotificationList />
  </>;
}

export default App;
