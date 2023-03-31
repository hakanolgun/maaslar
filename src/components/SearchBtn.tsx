import { useFilters } from "@/store/filterSlice";
import { useAppDispatch } from "@/store/hooks";
import { changeCount, changeResult } from "@/store/resultSlice";
import {
  getAverageSalary,
  getMedianSalary,
  getSalariesArray,
  getFilteredResult,
} from "@/utils/result";
import React from "react";

const SearchBtn = () => {
  const filters = useFilters();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    const result = getFilteredResult(filters);
    const salaries = getSalariesArray(result);
    dispatch(changeCount(salaries.length));

    const averageSalary = getAverageSalary(salaries);
    const medianSalary = getMedianSalary(salaries);

    const updatedResult = {
      count: salaries.length,
      average: averageSalary,
      median: medianSalary,
    };
    console.log("updatedResult", updatedResult);

    dispatch(changeResult(updatedResult));
  };
  return (
    <button className="btn bg-purple text-white my-4" onClick={handlePress}>
      Sonuçları Göster
    </button>
  );
};

export default SearchBtn;
