import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface HistoryEntry {
  noteId: string;
  action: string;
  timestamp: number;
}

interface Note {
  id: string;
  text: string;
}

interface NotesState {
  notes: Note[];
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
      addNote: (id: string, text: string) =>
        set((state) => {
          state.notes.push({ id, text });
          state.history.push({
            noteId: id,
            action: 'add',
            timestamp: Date.now(),
          });
        }),
      updateNote: (id: string, text: string) =>
        set((state) => {
          const note = state.notes.find((n: Note) => n.id === id);
          if (note) {
            note.text = text;
            state.history.push({
              noteId: id,
              action: 'update',
              timestamp: Date.now(),
            });
          }
        }),
      deleteNote: (id: string) =>
        set((state) => {
          state.notes = state.notes.filter((n: Note) => n.id !== id);
          state.history.push({
            noteId: id,
            action: 'delete',
            timestamp: Date.now(),
          });
        }),
      addHistoryEntry: (noteId: string, action: string) =>
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
