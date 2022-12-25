import React from "react";
import Spinner from "./Spinner";

interface Props {
  onClick?: () => {};
  label?: string;
  type?: string;
  className?: string;
  submit?: boolean;
  loading?: boolean;
}
function Button({ onClick, label, type, className, submit, loading }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center w-[102px] h-[37px] rounded-[3px] text-base ${
        type === "primary" && "bg-light-green text-white"
      }
      ${type === "auth" && "bg-white text-light-green font-bold"} ${className}`}
      type={submit ? "submit" : "button"}
    >
      {loading ? <Spinner /> : label}
    </button>
  );
}

export default Button;
