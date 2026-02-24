import { create } from 'zustand';
import type { NotificationsSlice } from './slices/notificationsSlice';
import { createNotificationsSlice } from './slices/notificationsSlice';
import type { UserSlice } from './slices/userSlice';
import { createUserSlice } from './slices/userSlice';

type StoreState = NotificationsSlice & UserSlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createNotificationsSlice(...a),
  ...createUserSlice(...a),
}));

export { type Notification, type NotificationsSlice } from './slices/notificationsSlice';
export { type User, type UserSlice } from './slices/userSlice';
