import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (arg, thunkAPI) => {
    const response = await fetch('http://localhost:3004/api/quote');
    const { data } = await response.json();
    return data;
  }
);

const initialState = {
  quote: '',
  loading: false,
  error: false,
};

const options = {
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchQuote.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchQuote.fulfilled]: (state, { payload: { quote, author } }) => {
      state.quote = { quote, author };
      state.loading = false;
      state.error = false;
    },
    [fetchQuote.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
};

const quoteSlice = createSlice(options);

export default quoteSlice.reducer;

export const selectQuote = (state) => state.quote.quote;
export const selectLoading = (state) => state.quote.loading;
export const selectError = (state) => state.quote.error;