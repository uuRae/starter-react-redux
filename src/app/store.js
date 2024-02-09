import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notes/notes.slice';
import quoteReducer from '../features/quote/quote.slice';
import searchReducer from '../features/search/search.slice';

export default configureStore({
  reducer: {
    notes: notesReducer,
    search: searchReducer,
    quote: quoteReducer,
  },
});