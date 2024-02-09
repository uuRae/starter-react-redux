import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/search.slice";

const initialState = {
  notes: [
    { id: 1, note: "State is the current data in the app" },
    { id: 2, note: "View is the UI that displays the state" },
    { id: 3, note: "Actions alter the state of the app" },
    { id: 4, note: "Reducers should only make immutable updates" },
    { id: 5, note: "Reducers should be pure functions" },
  ],
};

const options = {
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push({ id: state.notes.length + 1, note: action.payload });
    },
    removeNote: (state, action) => {
      state.notes.splice(
        state.notes.findIndex((note) => note.id === action.payload),
        1
      );
    },
  },
};

const notesSlice = createSlice(options);

console.log(notesSlice);

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;

export const selectAllNotes = (state) => state.notes.notes;
export const selectFilteredNotes = (state) => {
  const notes = selectAllNotes(state);
  const searchTerm = selectSearchTerm(state);

  return notes.filter((item) =>
    item.note.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
