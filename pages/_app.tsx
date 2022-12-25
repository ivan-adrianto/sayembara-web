import "../styles/globals.css";
import "../assets/css/pages/register.css";
import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";
import { Provider } from "react-redux";
import store from "../redux/store";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
