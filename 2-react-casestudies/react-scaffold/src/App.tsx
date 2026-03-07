import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface UserSession {
  userId: string;
  role: "admin" | "user";
  token: string;
  expiresAt: Date;
}

export const useUserSession = create(
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

interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface CollaboratorsState {
  collaborators: Collaborator[];
  setCollaborators: (collaborators: Collaborator[]) => void;
}

export const useCollaboratorsStore = create<CollaboratorsState>()(
  devtools(
    immer((set) => ({
      collaborators: [],
      setCollaborators: (collaborators: Collaborator[]) =>
        set(
          (state) => {
            state.collaborators = collaborators;
          },
          false,
          "collaborators/setCollaborators",
        ),
    })),
    { name: "CollaboratorsStore" },
  ),
);

interface NotesState {
  notes: Note[];
  history: HistoryEntry[];
  addNote: (note: Omit<Note, "id">) => string;
  updateNote: (id: string, updates: Partial<Omit<Note, "id">>) => void;
  deleteNote: (id: string) => void;
  addHistoryEntry: (noteId: string, action: string) => void;
  clearHistory: () => void;
  getNoteById: (id: string) => Note | undefined;
  getNotesByKeyword: (keyword: string) => Note[];
  getHistoryForNote: (noteId: string) => HistoryEntry[];
}

export const useNotesStore = create<NotesState>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          notes: [],
          history: [],

          addNote: (note) => {
            const id = crypto.randomUUID();
            set(
              (state) => {
                state.notes.push({ ...note, id });
                state.history.push({
                  noteId: id,
                  action: "CREATE",
                  timestamp: Date.now(),
                });
              },
              false,
              "notes/addNote",
            );
            return id;
          },

          updateNote: (id, updates) => {
            set(
              (state) => {
                const note = state.notes.find((n) => n.id === id);
                if (note) {
                  Object.assign(note, updates);
                  state.history.push({
                    noteId: id,
                    action: "UPDATE",
                    timestamp: Date.now(),
                  });
                }
              },
              false,
              "notes/updateNote",
            );
          },

          deleteNote: (id) => {
            set(
              (state) => {
                const index = state.notes.findIndex((n) => n.id === id);
                if (index !== -1) {
                  state.notes.splice(index, 1);
                  state.history.push({
                    noteId: id,
                    action: "DELETE",
                    timestamp: Date.now(),
                  });
                }
              },
              false,
              "notes/deleteNote",
            );
          },

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

          getNoteById: (id) => get().notes.find((n) => n.id === id),

          getNotesByKeyword: (keyword) =>
            get().notes.filter(
              (n) =>
                n.title.toLowerCase().includes(keyword.toLowerCase()) ||
                n.content.toLowerCase().includes(keyword.toLowerCase()),
            ),

          getHistoryForNote: (noteId) =>
            get().history.filter((h) => h.noteId === noteId),
        }),
        {
          name: "notes-storage",
          partialize: (state) => ({
            notes: state.notes,
            history: state.history,
          }),
        },
      ),
    ),
    { name: "NotesStore" },
  ),
);

export const unsubNotes = useNotesStore.subscribe((state) => {
  console.log("History updated. Total entries:", state.history.length);
});
