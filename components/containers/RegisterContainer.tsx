import Router from "next/router";
import React, { useRef, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Radio from "../common/Radio";

function RegisterContainer() {
  const [role, setRole] = useState("participant");
  const email: React.MutableRefObject<null | HTMLInputElement> = useRef(null);
  const password: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);
  const verifyPassword: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);
  const fullname: React.MutableRefObject<null | HTMLInputElement> =
    useRef(null);
  const [formValidation, setFormValidation] = useState({
    fullname: "",
    email: "",
    password: "",
    verifyPassword: "",
  });
  const onFormChange = () => {
    const inValidForm = Object.values(formValidation).filter(
      (item) => item.length > 0
    );
    if (inValidForm.length > 0) {
      setFormValidation({
        fullname: "",
        email: "",
        password: "",
        verifyPassword: "",
      });
    }
  };
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    let isValid = true;
    let validation = { ...formValidation };
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!fullname.current?.value) {
      validation = {
        ...validation,
        fullname: "Fullname cannot be empty",
      };
      isValid = false;
    }
    if (!email.current?.value) {
      validation = { ...validation, email: "Email cannot be empty" };
      isValid = false;
    } else if (!email.current?.value.match(regex)) {
      validation = { ...validation, email: "Invalid email" };
      isValid = false;
    }
    if (!password.current?.value) {
      validation = {
        ...validation,
        password: "Password cannot be empty",
      };
      isValid = false;
    } else if (password.current.value.length < 6) {
      validation = {
        ...validation,
        password: "Password length minimum 6 characters",
      };
      isValid = false;
    }
    if (
      verifyPassword.current?.value !== password.current?.value ||
      !password.current?.value
    ) {
      validation = {
        ...validation,
        verifyPassword: "Invalid verify password",
      };
      isValid = false;
    }
    setFormValidation(validation);
    if (isValid) {
      const data = {
        email: email.current?.value,
        fullname: fullname.current?.value,
        password: password.current?.value,
        verifyPassword: verifyPassword.current?.value,
      };
    }
  };
  return (
    <div className="w-screen grid grid-cols-4">
      <div className="bg-light-green h-screen px-14 py-12">
        <h1 className="text-white text-2xl font-bold mb-14">
          Create an account
        </h1>
        <form onSubmit={submit}>
          <Input
            label="Fullname"
            className="mb-6"
            inputRef={fullname}
            isError={formValidation.fullname !== ""}
            errMessage={formValidation.fullname}
            onChange={onFormChange}
          />
          <Input
            label="Email"
            className="mb-6"
            inputRef={email}
            isError={formValidation.email !== ""}
            errMessage={formValidation.email}
            onChange={onFormChange}
          />
          <Input
            label="Password"
            className="mb-6"
            inputRef={password}
            isError={formValidation.password !== ""}
            errMessage={formValidation.password}
            onChange={onFormChange}
          />
          <Input
            label="Verify Password"
            className="mb-10"
            inputRef={verifyPassword}
            isError={formValidation.verifyPassword !== ""}
            errMessage={formValidation.verifyPassword}
            onChange={onFormChange}
          />
          <p className="text-white mb-2 font-bold">Join As</p>
          <div className="flex mb-9">
            <Radio
              label="Provider"
              id="role-provider"
              value="provider"
              onChange={() => setRole("provider")}
              checked={role === "provider"}
            />
            <Radio
              label="Participant"
              id="role-participant"
              onChange={() => setRole("participant")}
              value="participant"
              checked={role === "participant"}
            />
          </div>
          <Button type="auth" label="Join" className="mb-3" submit />
        </form>
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
