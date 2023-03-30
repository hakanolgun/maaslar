import DATA from "@/data/data";
import { IData, IFilter } from "@/types/types";

export function getFilteredResult(filter: IFilter) {
  let filteredArray: IData[] = [...DATA].filter(
    (i) => i.currency === "₺ - Türk Lirası"
  );
  if (filter.level.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.level.includes(item.level)
    );
  }
  if (filter.position.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.position.includes(item.position)
    );
  }
  return filteredArray;
}

export function getSalariesArray(result: IData[]) {
  return result.map((item) => Number(item.salary.split(".")[0]) + 0.5);
}

export function getAverageSalary(salariesArr: number[]) {
  if (salariesArr.length < 10) return 0;
  const sum = salariesArr.reduce((a, b) => a + b, 0);
  const avg = sum / salariesArr.length || 0;
  return Number(avg.toFixed(3));
}

export function getMedianSalary(salariesArr: number[]) {
  if (salariesArr.length < 10) return 0;
  const sorted = Array.from(salariesArr).sort((a, b) => a - b);
  console.log("sorted", sorted);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}
