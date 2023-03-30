import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer text-center">
      <p>
        Bu proje açık kaynak olarak{" "}
        <a
          className="text-info"
          href="https://github.com/hakanolgun/maaslar"
          target="_blank"
        >
          github hesabımda
        </a>{" "}
        bulunmaktadır.
      </p>
      <p>İsteyen herkes kullanabilir, katkıda bulunabilir</p>
    </div>
  );
};

export default Footer;
