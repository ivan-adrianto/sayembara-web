import Router from "next/router";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CombinedState, Reducer } from "redux";
import { loginRequest } from "../../redux/actionCreators/authActionCreators";
import { AuthActions } from "../../redux/actionTypes/authActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import Input from "../common/Input";

function LoginContainer() {
  const dispatch = useDispatch();
  const { loadingLogin: loading, errLogin: error } = useSelector(
    (state: RootState) => state.auth
  );

  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);
  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email.current?.value) {
      setIsEmailError(true);
      setEmailErrMsg("Email cannot be empty");
      return;
    }
    if (!email.current?.value?.match(regex)) {
      setIsEmailError(true);
      setEmailErrMsg("Email is not valid");
      return;
    }
    if (!password.current?.value) {
      setIsPasswordError(true);
      return;
    }
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    dispatch(loginRequest(data));
  };
  const email: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const password: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);

  return (
    <div className="w-screen grid grid-cols-4">
      <div className="bg-light-green h-screen px-14 py-12">
        <h1 className="text-white text-2xl font-bold mb-14">
          Sign in to your account
        </h1>
        <form onSubmit={submit}>
          <Input
            label="Email"
            className="mb-6"
            inputRef={email}
            isError={isEmailError}
            errMessage={emailErrMsg}
            onChange={() => isEmailError && setIsEmailError(false)}
          />
          <Input
            label="Password"
            className="mb-10"
            type="password"
            inputRef={password}
            isError={isPasswordError}
            errMessage={"Password cannot be empty"}
            onChange={() => isPasswordError && setIsPasswordError(false)}
          />
          <Button
            type="auth"
            label="Sign in"
            className="mb-3"
            submit
            loading={loading}
          />
          {error && <p className=" text-red-500 font-bold -mt-3">{error}</p>}
        </form>
        <p className="text-white text-base">
          {`Don’t have an account? `}
          <span
            className="font-bold cursor-pointer"
            onClick={() => Router.push("register")}
          >
            Join here
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginContainer;
