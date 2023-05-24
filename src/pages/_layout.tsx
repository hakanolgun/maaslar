import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: any) {
  return (
    <main className="h-100 d-flex flex-column bg-black">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
