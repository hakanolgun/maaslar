import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import Header from "@/components/Header";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}
          <meta name="description" content="Bilişim Sektörü Ücretler" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
          />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
