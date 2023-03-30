import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer text-center bg-dark">
      <p className="m-0">
        Bu proje açık kaynak olarak{" "}
        <a
          className="text-info"
          href="https://github.com/hakanolgun/maaslar"
          target="_blank"
        >
          github hesabımdan
        </a>{" "}
        erişebilirsiniz.
      </p>
    </div>
  );
};

export default Footer;
