import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserSession {
  userId: string;
  role: "admin" | "user";
  token: string;
  expiresAt: Date;
}

const useUserSession = create(
  persist<UserSession>(
    () => ({
      userId: "",
      role: "user",
      token: "",
      expiresAt: new Date(),
    }),
    {
      name: "user-session",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { expiresAt, ...rest } = state;
        return rest as any;
      },
      version: 2,
      migrate: (persistedState: unknown, version) => {
        if (version < 2) {
          return {
            ...(persistedState as Omit<UserSession, "role">),
            expiresAt: new Date(),
            role: "user",
          };
        }
        return persistedState as UserSession;
      },
    },
  ),
);

interface Note {
  id: string;
  title: string;
  content: string;
}

interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface NotesState {
  notes: Note[];
  history: HistoryEntry[];
  addHistoryEntry: (noteId: string, action: string) => void;
  clearHistory: () => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    immer(
      persist(
        (set) => ({
          notes: [],
          history: [],
          addHistoryEntry: (noteId: string, action: string) =>
            set(
              (state) => {
                state.history.push({
                  noteId,
                  action,
                  timestamp: Date.now(),
                });
              },
              false,
              "notes/addHistoryEntry",
            ),
          clearHistory: () =>
            set(
              (state) => {
                state.history = [];
              },
              false,
              "notes/clearHistory",
            ),
        }),
        {
          name: "notes-storage",
        },
      ),
    ),
    { name: "NotesStore" },
  ),
);

function App() {
  return <></>;
}

export default App;
