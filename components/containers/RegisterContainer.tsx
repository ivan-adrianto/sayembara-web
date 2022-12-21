import Router from "next/router";
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Radio from "../common/Radio";

function RegisterContainer() {
  const [role, setRole] = useState("participant");
  return (
    <div className="w-screen grid grid-cols-4">
      <div className="bg-light-green h-screen px-14 py-12">
        <h1 className="text-white text-2xl font-bold mb-14">
          Create an account
        </h1>
        <Input label="Fullname" className="mb-6" />
        <Input label="Email" className="mb-6" />
        <Input label="Password" className="mb-6" />
        <Input label="Verify Password" className="mb-10" />
        <p className="text-white mb-2 font-bold">Join As</p>
        <div className="flex mb-9">
          <Radio label="Provider" id="role-provider" />
          <Radio label="Participant" id="role-participant" />
        </div>
        <Button type="auth" label="Join" className="mb-3" />
        <p className="text-white text-base">
          {`Already have an account? `}
          <span
            className="font-bold cursor-pointer"
            onClick={() => Router.push("login")}
          >
            Sign In here
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterContainer;
