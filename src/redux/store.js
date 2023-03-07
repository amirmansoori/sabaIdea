import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/display/displaySlice";

export const store = configureStore({
  reducer: {
    videos: counterReducer,
  },
});
