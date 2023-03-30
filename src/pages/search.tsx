import React from "react";
import SearchBtn from "@/components/SearchBtn";
import Result from "@/components/Result";
import MultiFilter from "@/components/MultiFilter";
import { positions, experiences, work_types } from "@/data/filters";
import {
  changeExperience,
  changePosition,
  changeWorkType,
} from "@/store/filterSlice";

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
        <MultiFilter
          options={work_types}
          update={changeWorkType}
          title="Çalışma Türü"
        />
        <SearchBtn />
        <Result />
      </div>
    </main>
  );
}
