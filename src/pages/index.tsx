import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bilişim Sektörü Ücretler</title>
      </Head>
      <section
        style={{ backgroundColor: "black", minHeight: "80%" }}
        className="container d-flex flex-column align-items-center justify-content-center p-4"
      >
        <Link
          style={{ textDecoration: "none", width: "200px" }}
          className="btn btn-lg bg-purple my-4 text-white"
          href="/search"
        >
          Ücret Filtrele
        </Link>
        <div className="w-100 h-100 d-flex flex-column align-items-center text-white py-5 px-1">
          <h2>Nedir?</h2>
          <ul style={{ alignSelf: "start" }}>
            <li>
              2023 yılı Şubat ayında{" "}
              <a
                className="text-info"
                href="https://twitter.com/oncekiyazilimci"
                target="_blank"
              >
                @oncekiyazılımcı
              </a>
              &apos;nın yaptığı anket sonuçlarını analiz etmenize yarayan bir
              uygulamadır
            </li>
            <li>
              Kullanıcıların verdiği bilgilere göre çeşitli filtreler ile
              aradığınız özellikteki yazılımcıların maaş ortalamalarını gösterir
            </li>
            <li>
              Bilişim sektöründeki ücretler hakkında fikir edinmenizi sağlar
            </li>
          </ul>
          <h2 className="mt-4">Ne Değildir?</h2>
          <ul style={{ alignSelf: "start" }}>
            <li>
              Maaşlara yan hakların dahil olup olmadığı net değildir (Yol, yemek
              vs.)
            </li>
            <li>
              Ankete katılanların hangi şartlarda çalıştığı, haftada kaç gün,
              günde kaç saat mesai yapıldığı net değildir.
            </li>
            <li>
              Yüksek enflasyona sahip ve parasının değeri sürekli düşen bir
              ülkede sonuçlar her geçen ay güncel rakamların gerisinde kalır.
            </li>
            <li>
              Katılımcıların çoğunluğu yazılım geliştiriciler olduğu için diğer
              branşlarda (tasarım, sistem vs.) yeterli veri bulunamadı yanıtı
              alabilirsiniz
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
