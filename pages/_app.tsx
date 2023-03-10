import "../styles/globals.css";
import "../assets/css/pages/register.css";

// React Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";
import Cookies from "js-cookie";
import { addBearerToken } from "../redux/services/api";
import { wrapper } from "../redux/store";
import { useRouter } from "next/router";
import { useBeforeRender } from "../hooks/useBeforeRender";
import { useEffect } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const noAuthRoutes = ["/login", "/register"];

  useEffect(() => {
    if (!Cookies.get("token") && !noAuthRoutes.includes(router.pathname)) {
      router.push("/login");
    }
  },[]);

  useBeforeRender(() => {
    if (Cookies.get("token")) {
      addBearerToken(Cookies.get("token") || "");
    } 
  });

  return (
    <main className={`${lato.className} bg-white min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}

export default wrapper.withRedux(App);
