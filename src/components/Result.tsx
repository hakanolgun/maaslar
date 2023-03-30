import { Button } from "@nextui-org/react";
import React from "react";

const Result = () => {
  return (
    <div className="d-flex flex-column bg-success cardContainer">
      <div>Seçtiğiniz kriterlere göre çalışanların</div>
      <div className="d-flex justify-content-around w-100">
        <p>Ortalama Maaşı:</p>
        <p>xxxxxx</p>
      </div>
      <div className="d-flex justify-content-around w-100">
        <p>Median Maaşı:</p>
        <p>xxxxxx</p>
      </div>
      <div className="d-flex justify-content-around w-100">
        <p>Ortalama Maaşı:</p>
        <p>xxxxxx</p>
      </div>
      <Button>Güncel Sonuçları Göster</Button>
    </div>
  );
};

export default Result;
