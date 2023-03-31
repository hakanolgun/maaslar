import DATA from "@/data/data";
import { IData, IFilter } from "@/types/types";

export function getFilteredResult(filter: IFilter) {
  let filteredArray: IData[] = [...DATA].filter(
    (i) => i.currency === "₺ - Türk Lirası"
  );
  if (filter.position.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.position.includes(item.position)
    );
  }
  if (filter.experience.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.experience.includes(item.experience)
    );
  }
  if (filter.workType.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.workType.includes(item.work_type)
    );
  }
  if (filter.city.length > 0) {
    filteredArray = filteredArray.filter((item: IData) =>
      filter.city.includes(item.city.trim().toLowerCase())
    );
  }
  if (filter.techStack.length > 0) {
    filteredArray = filteredArray.filter((item: IData) => {
      const techStackWords = item.tech_stack
        .split(",")
        .map((word) => word.trim().toLowerCase());
      return filter.techStack.some((value) => techStackWords.includes(value));
    });
  }
  return filteredArray;
}

export function getSalariesArray(result: IData[]) {
  return result.map((item) => Number(item.salary.split(".")[0]) + 0.5);
}

export function getAverageSalary(salariesArr: number[]) {
  if (salariesArr.length < 3) return 0;
  const sum = salariesArr.reduce((a, b) => a + b, 0);
  const avg = sum / salariesArr.length || 0;
  return Number(avg.toFixed(3));
}

export function getMedianSalary(salariesArr: number[]) {
  if (salariesArr.length < 3) return 0;
  const sorted = Array.from(salariesArr).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}
