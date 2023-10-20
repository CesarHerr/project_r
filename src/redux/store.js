import { configureStore } from '@reduxjs/toolkit';
import regionReducer from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    region: regionReducer,
    country: regionReducer,
  },
});

export default store;
