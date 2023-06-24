import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head>
          <meta
            name="description"
            content="Bilişim Sektörü Ücretler, Yazılımcı maaşları"
          />
          <meta
            name="keywords"
            content="bilişim sektörü, yazılımcı maaşları, yazılımcı ücretleri"
          />
          <link rel="icon" href="/maaslar/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
