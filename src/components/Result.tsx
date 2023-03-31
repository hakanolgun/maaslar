import { useResults } from "@/store/resultSlice";
import React from "react";

const Result = () => {
  const results = useResults();

  if (results.count === null) {
    return <div />;
  }

  if (results.count < 3) {
    return <NotEnoughData />;
  }

  return (
    <div className="d-flex flex-column cardContainer text-white my-4">
      <p className="pt-3">
        Seçtiğiniz kriterlere uygun <strong>{results.count}</strong> kişi
        bulundu. Bu kişilerin;
      </p>
      <SalaryRow title="Ortalama Maaşı:" data={results.average.toFixed(3)} />
      <SalaryRow title="Medyan Maaşı:" data={results.median.toFixed(3)} />
      <p className="py-1">
        Not: Yukarıdaki rakamlar 2023 Şubat ayının verilerine göre
        hesaplanmıştır. Bu rakamların şu anda karşılığını bulmak için aşağıdaki
        bağlantıyı kullanabilirsiniz.
      </p>
      <a
        className="text-info"
        href="https://herkesicin.tcmb.gov.tr/wps/wcm/connect/ekonomi/hie/icerik/enflasyon+hesaplayici"
        target="_blank"
      >
        Enflasyon hesaplama bağlantısı
      </a>
    </div>
  );
};
export default Result;

const SalaryRow = ({ title, data }: any) => {
  return (
    <div className="d-flex justify-content-between w-100 p-2 align-items-center">
      <p className="mb-0 fs-4 text-purple">{title}</p>
      <p className="mb-0 fs-4 fw-bold text-purple">{data} ₺</p>
    </div>
  );
};

function NotEnoughData() {
  return (
    <div className="cardContainer my-4">
      <p className="text-center mb-0 text-warning">
        Yeterli sayıda veri yok. Daha genel bir arama yapmayı deneyin
      </p>
    </div>
  );
}
