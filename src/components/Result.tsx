import { useResults } from "@/store/resultSlice";
import React from "react";

const Result = () => {
  const results = useResults();

  if (results.count === null) {
    return <div />;
  }

  if (results.count < 10) {
    return <NotEnoughData />;
  }

  return (
    <div className="d-flex flex-column cardContainer text-white">
      <div className="pt-3">
        Seçtiğiniz kriterlere göre {results.count} kişi bulundu.
      </div>
      <div className="fs-5 my-1">Bu çalışanların</div>
      <SalaryRow title="Ortalama Maaşı:" data={results.average.toFixed(3)} />
      <SalaryRow title="Medyan Maaşı:" data={results.median.toFixed(3)} />
      <p className="">
        Not: Yukarıdaki maaşlar 2023 Şubat ayının verilerine göre
        hesaplanmıştır. Bu maaşların bugünkü karşılığını bulmak için aşağıdaki
        bağlantıyı kullanabilirsiniz
      </p>
      <a
        className="text-info"
        href="https://herkesicin.tcmb.gov.tr/wps/wcm/connect/ekonomi/hie/icerik/enflasyon+hesaplayici"
      >
        Bugünkü karşılığını hesapla
      </a>
    </div>
  );
};
export default Result;

const SalaryRow = ({ title, data }: any) => {
  return (
    <div className="d-flex justify-content-around w-100 p-2 align-items-center">
      <p className="mb-0 fs-4 text-success">{title}</p>
      <p className="mb-0 fs-4 fw-bold text-success">{data} ₺</p>
    </div>
  );
};

function NotEnoughData() {
  return (
    <div className="cardContainer">
      <p className="text-center mb-0 text-warning">
        Yeterli sayıda veri yok. Daha genel bir arama yapmayı deneyin
      </p>
    </div>
  );
}
