import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <main className="pb-3" style={{ backgroundColor: "black" }}>
      <Header />
      {children}
    </main>
  );
}
