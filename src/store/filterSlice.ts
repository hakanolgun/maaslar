import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { useAppSelector } from "./hooks";
import { IFilter } from "@/types/types";

interface IState {
  filters: IFilter;
}

const initialState: IState = {
  filters: {
    level: [],
    position: [],
    experience: [],
    workType: [],
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
    changeWorkType: (state, action) => {
      state.filters.workType = action.payload;
    },
  },
});

export const { changeLevel, changePosition, changeExperience, changeWorkType } =
  filterSlice.actions;

export const useFilters = () =>
  useAppSelector((s: RootState) => s.filters.filters);

export default filterSlice.reducer;
