import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import resultReducer from "./resultSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    results: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
