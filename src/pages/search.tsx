import React from "react";
import SearchBtn from "@/components/SearchBtn";
import Result from "@/components/Result";
import MultiFilter from "@/components/MultiFilter";
import { positions, experiences } from "@/data/filters";
import { changeExperience, changePosition } from "@/store/filterSlice";

export default function Search() {
  return (
    <main>
      <div className="d-flex flex-column justify-content-center align-items-center gap-2 py-4 bg-">
        <MultiFilter
          options={positions}
          update={changePosition}
          title="Pozisyon"
        />
        <MultiFilter
          options={experiences}
          update={changeExperience}
          title="Tecrübe"
        />
        <SearchBtn />
        <Result />
      </div>
    </main>
  );
}
