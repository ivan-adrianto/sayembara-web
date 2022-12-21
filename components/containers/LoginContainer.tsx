import Router from "next/router";
import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function LoginContainer() {
  return (
    <div className="w-screen grid grid-cols-4">
      <div className="bg-light-green h-screen px-14 py-12">
        <h1 className="text-white text-2xl font-bold mb-14">
          Sign in to your account
        </h1>
        <Input label="Email" className="mb-6" />
        <Input label="Password" className="mb-10" />
        <Button type="auth" label="Sign in" className="mb-3" />
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
