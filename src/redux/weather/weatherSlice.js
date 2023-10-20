import { createSlice } from '@reduxjs/toolkit';
import { fetchRegion, fetchCountry } from './api';

const initialState = {
  category: [],
  region: [],
  country: [],
  isLoading: false,
  error: undefined,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [fetchRegion.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRegion.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.region = action.payload;
    },
    [fetchRegion.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [fetchCountry.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.country = action.payload;
    },
    [fetchCountry.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

  },
});

export default categorySlice.reducer;
