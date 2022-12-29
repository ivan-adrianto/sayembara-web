import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";

function useCheckLoginStatus() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      Router.push("/");
    }
  }, []);
  return isLoggedIn;
}

export default useCheckLoginStatus;
