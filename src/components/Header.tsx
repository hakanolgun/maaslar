import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-dark py-4 d-flex justify-content-center ">
      <Link
        style={{ textDecoration: "none" }}
        className="mb-0 fs-4 text-center text-white"
        href="/"
      >
        Yazılım Sektörü Ücretler
      </Link>
    </div>
  );
};

export default Header;
