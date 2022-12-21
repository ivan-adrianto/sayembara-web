import React from "react";
import { EnumType } from "typescript";

interface Props {
  onClick?: () => {};
  label?: string;
  type?: string;
  className?: string;
}
function Button({ onClick, label, type, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center w-[102px] h-[37px] rounded-[3px] text-base ${
        type === "primary" && "bg-light-green text-white"
      }
      ${type === "auth" && "bg-white text-light-green font-bold"} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
