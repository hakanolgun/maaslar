import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Layout from "./_layout";
import Head from "next/head";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap" as never);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://hakanolgun.github.io/maaslar/cover.png"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Script
            async
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-K18D6NP8G0"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || []; 
            function gtag(){
              dataLayer.push(arguments)
            }
            gtag('js', new Date()); 
            gtag('config', 'G-K18D6NP8G0')
            `}
          </Script>
        </Layout>
      </Provider>
    </>
  );
}
