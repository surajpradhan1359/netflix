import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js';
import popupReducer from './popupSlice.js';
import movieReducer from './movieSlice.js'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    popup:popupReducer,
    movie:movieReducer
  },
});
