import Head from "next/head";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yazılım Sektörü Ücretler</title>
      </Head>
      <main className="bg-warning d-flex flex-column h-100">
        <Link className="btn btn-primary" href="/search">
          Arama Yap
        </Link>
      </main>
    </>
  );
}
