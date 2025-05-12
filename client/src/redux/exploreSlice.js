// redux/exploreSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCareerId: null,
};

const exploreSlice = createSlice({
  name: 'explore',
  initialState,
  reducers: {
    setCareerId: (state, action) => {
      state.selectedCareerId = action.payload;
    },
    clearCareerId: (state) => {
      state.selectedCareerId = null;
    },
  },
});

export const { setCareerId, clearCareerId } = exploreSlice.actions;
export default exploreSlice.reducer;
