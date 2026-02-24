import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserRole = 'admin' | 'user';

interface SessionState {
  userId: string;
  token: string;
  expiresAt: number;
  role: UserRole;
  setSession: (userId: string, token: string, expiresAt: number) => void;
  setRole: (role: UserRole) => void;
  clearSession: () => void;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      userId: '',
      token: '',
      expiresAt: 0,
      role: 'user',
      setSession: (userId, token, expiresAt) => set({ userId, token, expiresAt }),
      setRole: (role) => set({ role }),
      clearSession: () => set({ userId: '', token: '', expiresAt: 0, role: 'user' }),
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ userId: state.userId, token: state.token }),
      version: 2,
      migrate: (persisted, version) => {
        if (version < 2) {
          return { ...persisted, role: 'user' as UserRole };
        }
        return persisted;
      },
    }
  )
);

export default useSessionStore;
