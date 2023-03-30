import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-dark py-4 d-flex flex-column justify-content-center">
      <Link style={{ textDecoration: "none" }} href="/">
        <h1 className="text-center h1 text-purple hvr">
          Bilişim Sektörü Ücretler
        </h1>
      </Link>
      <p className="text-center text-warning mb-0">2023 Şubat</p>
    </div>
  );
};

export default Header;
