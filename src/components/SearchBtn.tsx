import { useFilters } from "@/store/filterSlice";
import { useAppDispatch } from "@/store/hooks";
import { changeCount, changeResult } from "@/store/resultSlice";
import {
  getAverageSalary,
  getMedianSalary,
  getSalariesArray,
  getFilteredResult,
} from "@/utils/result";
import React, { useRef } from "react";

const SearchBtn = () => {
  const filters = useFilters();
  const dispatch = useAppDispatch();
  const myRef = useRef(null);

  const handlePress = () => {
    console.log("filters", filters);

    const result = getFilteredResult(filters);
    console.log(result);

    const salaries = getSalariesArray(result);
    dispatch(changeCount(salaries.length));

    const averageSalary = getAverageSalary(salaries);
    const medianSalary = getMedianSalary(salaries);
    console.log("averageSalary", averageSalary);
    console.log("medianSalary", medianSalary);

    const updatedResult = {
      count: salaries.length,
      average: averageSalary,
      median: medianSalary,
    };

    dispatch(changeResult(updatedResult));
    myRef!.current!.scrollIntoView();
  };
  return (
    <button
      ref={myRef}
      className="btn bg-purple text-white my-4"
      onClick={handlePress}
    >
      Sonuçları Göster
    </button>
  );
};

export default SearchBtn;
