import { IData } from "@/types/types";

export function getUniques(data: any, filter: string) {
  const set = new Set();
  data.forEach((item: any) => {
    set.add(item[filter]);
  });
  const array = Array.from(set);
  console.log("array", array);
  return array;
}

export function getTechStack(data: IData[]) {
  const array: string[] = [];
  const lowerCaseArray = data.map((item: any) =>
    item.tech_stack.trim().toLowerCase()
  );

  lowerCaseArray.forEach((item: string) => {
    if (!item.includes(",") && !item.includes("|")) {
      array.push(item.trim());
    } else if (item.includes(",") && item.includes("|")) {
      const items1 = item.split(",");
      const items2 = items1.forEach((item) => {
        if (!item.includes("|")) {
          array.push(item.trim());
        } else {
          const items3 = item.split("|");
          items3.forEach((item) => array.push(item.trim()));
        }
      });
    } else if (item.includes(",")) {
      const items = item.split(",");
      items.forEach((item: string) => array.push(item.trim()));
    } else {
      const items = item.split("|");
      items.forEach((item) => array.push(item.trim()));
    }
  });
  const set = new Set();
  array.forEach((item) => set.add(item));
  const resultArray = Array.from(set);
  return resultArray;
}

export function getCities(data: IData[]) {
  const set = new Set();
  const x = data.forEach((item) => {
    if (!item.city.trim().includes("*")) {
      set.add(item.city.trim().toLowerCase());
    }
  });
  const array = Array.from(set);
  console.log("array", array);
  return array;
}
