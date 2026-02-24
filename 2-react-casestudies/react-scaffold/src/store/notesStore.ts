import { create } from 'zustand';
import { devtools, immer } from 'zustand/middleware';

interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface NotesState {
  notes: { id: string; text: string }[];
  history: HistoryEntry[];
  addNote: (id: string, text: string) => void;
  updateNote: (id: string, text: string) => void;
  deleteNote: (id: string) => void;
  addHistoryEntry: (noteId: string, action: string) => void;
  clearHistory: () => void;
}

const useNotesStore = create<NotesState>()(
  devtools(
    immer((set) => ({
      notes: [],
      history: [],
      addNote: (id, text) =>
        set((state) => {
          state.notes.push({ id, text });
          state.history.push({
            noteId: id,
            action: 'add',
            timestamp: Date.now(),
          });
        }),
      updateNote: (id, text) =>
        set((state) => {
          const note = state.notes.find((n) => n.id === id);
          if (note) {
            note.text = text;
            state.history.push({
              noteId: id,
              action: 'update',
              timestamp: Date.now(),
            });
          }
        }),
      deleteNote: (id) =>
        set((state) => {
          state.notes = state.notes.filter((n) => n.id !== id);
          state.history.push({
            noteId: id,
            action: 'delete',
            timestamp: Date.now(),
          });
        }),
      addHistoryEntry: (noteId, action) =>
        set((state) => {
          state.history.push({
            noteId,
            action,
            timestamp: Date.now(),
          });
        }),
      clearHistory: () =>
        set((state) => {
          state.history = [];
        }),
    }))
  )
);

export default useNotesStore;
