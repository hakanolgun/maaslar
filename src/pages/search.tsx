import React from "react";
import SearchBtn from "@/components/SearchBtn";
import Result from "@/components/Result";
import MultiFilter from "@/components/MultiFilter";
import { positions, experiences, work_types, cities } from "@/data/filters";
import {
  changeCity,
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
          name="position"
        />
        <MultiFilter
          options={experiences}
          update={changeExperience}
          title="Tecrübe"
          name="experience"
        />
        <MultiFilter
          options={work_types}
          update={changeWorkType}
          title="Çalışma Türü"
          name="workType"
        />
        <MultiFilter
          options={cities}
          update={changeCity}
          title="Şehir"
          name="city"
        />
        <SearchBtn />
        <Result />
      </div>
    </main>
  );
}
