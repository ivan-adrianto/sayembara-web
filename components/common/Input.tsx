import React, { ChangeEvent, LegacyRef } from "react";
interface Props {
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  inputRef?: LegacyRef<HTMLInputElement>;
  isError?: boolean;
  errMessage?: string;
  placeholder?: string;
}
function Input({
  type,
  onChange,
  label,
  className,
  inputRef,
  isError,
  errMessage,
  placeholder,
}: Props) {
  return (
    <div className={className}>
      {label && <p className="text-white text-base font-bold mb-2">{label}</p>}
      <input
        type={type || "text"}
        className={`bg-white w-full px-3 h-[37px] rounded-md border border-grey-1 focus:outline-none ${
          isError && "border-red-500 border-2"
        }`}
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder}
      />
      {isError && <p className="text-red-500 text-sm absolute">{errMessage}</p>}
    </div>
  );
}

export default Input;
