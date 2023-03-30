import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { useAppSelector } from "./hooks";
import { IFilter } from "@/types/types";

interface IState {
  filters: IFilter;
}

const initialState: IState = {
  filters: {
    position: [],
    experience: [],
    workType: [],
    city: [],
    techStack: [],
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changePosition: (state, action) => {
      state.filters.position = action.payload;
    },
    changeExperience: (state, action) => {
      state.filters.experience = action.payload;
    },
    changeWorkType: (state, action) => {
      state.filters.workType = action.payload;
    },
    changeCity: (state, action) => {
      state.filters.city = action.payload;
    },
    changeTechStack: (state, action) => {
      state.filters.techStack = action.payload;
    },
  },
});

export const {
  changePosition,
  changeExperience,
  changeWorkType,
  changeCity,
  changeTechStack,
} = filterSlice.actions;

export const useFilters = () =>
  useAppSelector((s: RootState) => s.filters.filters);

export default filterSlice.reducer;
