import { configureStore } from "@reduxjs/toolkit";
import slice from "./slices";

export const store = configureStore({
  reducer: {
    app: slice,
  },
});
