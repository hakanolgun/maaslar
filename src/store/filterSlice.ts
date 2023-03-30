import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { useAppSelector } from "./hooks";

interface IState {
  filters: {
    level: string[];
    position: string[];
    experience: string[];
  };
}

const initialState: IState = {
  filters: {
    level: [],
    position: [],
    experience: [],
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
    changeExperience: (state, action) => {
      state.filters.experience = action.payload;
    },
  },
});

export const { changeLevel, changePosition, changeExperience } =
  filterSlice.actions;

export const useFilters = () =>
  useAppSelector((s: RootState) => s.filters.filters);

export default filterSlice.reducer;
