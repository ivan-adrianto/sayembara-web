import "../styles/globals.css";
import "../assets/css/pages/register.css";
import type { AppProps } from "next/app";
import { Lato } from "@next/font/google";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import Cookies from "js-cookie";
import { setIsLoggedIn } from "../redux/actionCreators/authActionCreators";
import { addBearerToken } from "../redux/services/api";
import { wrapper } from "../redux/store";
import { useRouter } from "next/router";
import { RootState } from "../redux/reducers/rootReducer";
import { useBeforeRender } from "../hooks/useBeforeRender";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const dispatch = useDispatch();
  const noAuthRoutes = ["/login", "/register"];

  // useEffect(() => {
  //   if (Cookies.get("token") && !noAuthRoutes.includes(router.pathname)) {
  //     router.push("/login");
  //   }
  // },[]);

  useBeforeRender(() => {
    if (Cookies.get("token")) {
      addBearerToken(Cookies.get("token") || "");
      dispatch(setIsLoggedIn(true));
    } 
  });

  return (
    <main className={`${lato.className} bg-white min-h-screen`}>
      <Component {...pageProps} />
    </main>
  );
}

export default wrapper.withRedux(App);
