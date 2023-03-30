import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }: any) {
  return (
    <main className="h-100" style={{ backgroundColor: "black" }}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
