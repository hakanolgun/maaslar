import React from "react";
import SearchBtn from "@/components/SearchBtn";
import Result from "@/components/Result";
import MultiFilter from "@/components/MultiFilter";
import {
  positions,
  experiences,
  work_types,
  cities,
  tech_stacks,
} from "@/data/filters";
import {
  changeCity,
  changeExperience,
  changePosition,
  changeWorkType,
  changeTechStack,
} from "@/store/filterSlice";
import Head from "next/head";

export default function Search() {
  return (
    <>
      <Head>
        <title>Bilişim Sektörü Ücretler</title>
      </Head>
      <section
        style={{ backgroundColor: "black" }}
        className="d-flex flex-grow-1 flex-column justify-content-center align-items-center gap-2 py-4"
      >
        <SearchInfo />
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
        <MultiFilter
          options={tech_stacks}
          update={changeTechStack}
          title="Teknolojiler"
          name="techStack"
        />
        <SearchBtn />
        <Result />
      </section>
    </>
  );
}

function SearchInfo() {
  return (
    <div className="cardContainer text-white align-items-start mb-2">
      <p className="mb-0 text-warning">* Tüm bölümleri doldurmanız gerekmez</p>
      <p className="mb-0 text-warning">
        * Bir bölümü boş bıraktığınızda hepsi seçilmiş olur
      </p>
      <p className="mb-0 text-warning">* Birden fazla seçenek seçebilirsiniz</p>
      <p className="mb-0 text-warning">
        * Teknoloji seçimi yapacaksanız olası ihtimalleri düşününüz. Örneğin
        katılımcı .net girmiş ama c# girmemiş olabilir. Sadece c# eklerseniz
        .net girenleri elemiş olursunuz. İkisini de eklemelisiniz
      </p>
    </div>
  );
}
