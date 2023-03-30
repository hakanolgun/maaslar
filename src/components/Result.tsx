import { useResults } from "@/store/resultSlice";
import { Button } from "@nextui-org/react";
import React from "react";

const Result = () => {
  const results = useResults();
  return (
    <div className="d-flex flex-column bg-success cardContainer text-white">
      <div>Seçtiğiniz kriterlere göre {results.count} kişi bulundu.</div>
      <div>Bu çalışanların:</div>
      <div className="d-flex justify-content-around w-100">
        <p>Ortalama Maaşı:</p>
        <p>{results.average.toFixed(3)} ₺</p>
      </div>
      <div className="d-flex justify-content-around w-100">
        <p>Median Maaşı:</p>
        <p>{results.median.toFixed(3)} ₺</p>
      </div>
      <Button>Güncel Sonuçları Göster</Button>
    </div>
  );
};

export default Result;
