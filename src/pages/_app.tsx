import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap" as never);
  }, []);
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}
