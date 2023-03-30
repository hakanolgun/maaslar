import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { useAppSelector } from "./hooks";

interface IState {
  results: {
    count: number | null;
    average: number;
    median: number;
  };
}

const initialState: IState = {
  results: {
    count: null,
    average: 0,
    median: 0,
  },
};

export const filterSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    changeCount: (state, action) => {
      state.results.count = action.payload;
    },
    changeResult: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { changeCount, changeResult } = filterSlice.actions;

export const useResults = () =>
  useAppSelector((s: RootState) => s.results.results);

export default filterSlice.reducer;
