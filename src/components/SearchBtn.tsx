import { useFilters } from "@/store/filterSlice";
import { useAppDispatch } from "@/store/hooks";
import { changeCount, changeResult } from "@/store/resultSlice";
import {
  getAverageSalary,
  getMedianSalary,
  getSalariesArray,
  getFilteredResult,
} from "@/utils/result";
import { Button } from "@nextui-org/react";
import React from "react";

const SearchBtn = () => {
  const filters = useFilters();
  const dispatch = useAppDispatch();

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
  };
  return <Button onPress={handlePress}>Sonuçları Göster</Button>;
};

export default SearchBtn;
