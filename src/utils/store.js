import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js';
import popupReducer from './popupSlice.js';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    popup:popupReducer
  },
});
