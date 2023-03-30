import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-dark py-4 d-flex flex-column justify-content-center text-white">
      <Link
        style={{ textDecoration: "none" }}
        className="mb-0 fs-4 text-center text-white"
        href="/"
      >
        Bilişim Sektörü Ücretler
      </Link>
      <p className="text-center fs-5 mb-0">2023 Şubat</p>
    </div>
  );
};

export default Header;
