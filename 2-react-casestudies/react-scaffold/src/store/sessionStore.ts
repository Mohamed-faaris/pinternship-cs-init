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

interface PersistedSession {
  userId?: string;
  token?: string;
  role?: UserRole;
}

const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      userId: '',
      token: '',
      expiresAt: 0,
      role: 'user',
      setSession: (userId: string, token: string, expiresAt: number) => 
        set({ userId, token, expiresAt }),
      setRole: (role: UserRole) => set({ role }),
      clearSession: () => set({ userId: '', token: '', expiresAt: 0, role: 'user' }),
    }),
    {
      name: 'session-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state: SessionState): PersistedSession => ({ 
        userId: state.userId, 
        token: state.token 
      }),
      version: 2,
      migrate: (persisted: unknown, version: number): PersistedSession => {
        const data = persisted as PersistedSession;
        if (version < 2) {
          return { ...data, role: 'user' as UserRole };
        }
        return data;
      },
    }
  )
);

export default useSessionStore;
