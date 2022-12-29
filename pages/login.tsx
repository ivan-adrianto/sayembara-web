import Router from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoginContainer from "../components/containers/LoginContainer";
import useCheckLoginStatus from "../hooks/useCheckLoginStatus";
import Auth from "../layouts/Auth";
import Header from "../layouts/Header";
import { RootState } from "../redux/reducers/rootReducer";

function login() {
  useCheckLoginStatus();
  return (
    <div>
      <Header title="Login | Sayembara" />
      <Auth>
        <LoginContainer />
      </Auth>
    </div>
  );
}

export default login;
