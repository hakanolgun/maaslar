import DATA from "@/data/data";
import { Button, Checkbox } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect } from "react";
import LevelFilter from "@/components/LevelFilter";
import PositionFilter from "@/components/PositionFilter";
import Header from "@/components/Header";
import SearchBtn from "@/components/SearchBtn";
import Result from "@/components/Result";

// const x = getUniques(DATA, "currency");
// console.log("array", x);

// const y = getCities(DATA);
// console.log("y", y);

export default function Search() {
  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2 py-4 bg-">
        <LevelFilter />
        <PositionFilter />
        <SearchBtn />
        <Result />
      </div>
    </main>
  );
}
