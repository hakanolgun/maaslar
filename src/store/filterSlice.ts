import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { useAppSelector } from "./hooks";

interface IState {
  filters: {
    level: string[];
    position: any[];
  };
}

const initialState: IState = {
  filters: {
    level: [],
    position: [],
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeLevel: (state, action) => {
      state.filters.level = action.payload;
    },
    changePosition: (state, action) => {
      state.filters.position = action.payload;
    },
  },
});

export const { changeLevel, changePosition } = filterSlice.actions;

export const useFilters = () =>
  useAppSelector((s: RootState) => s.filters.filters);

export default filterSlice.reducer;
