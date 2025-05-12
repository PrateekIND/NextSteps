// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import exploreReducer from './exploreSlice';

export const store = configureStore({
  reducer: {
    explore: exploreReducer,
  },
});
