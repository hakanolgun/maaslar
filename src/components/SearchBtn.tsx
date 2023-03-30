import { useFilters } from "@/store/filterSlice";
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
  const handlePress = () => {
    console.log("filters", filters);
    const result = getFilteredResult(filters);
    console.log(result);
    const salaries = getSalariesArray(result);
    const averageSalary = getAverageSalary(salaries);
    const medianSalary = getMedianSalary(salaries);
    console.log("averageSalary", averageSalary);
    console.log("medianSalary", medianSalary);
  };
  return <Button onPress={handlePress}>Sonuçları Göster</Button>;
};

export default SearchBtn;
