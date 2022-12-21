import React from "react";

interface Props {
  type?: string;
  onChange?: () => {};
  label?: string;
  className?: string
}
function Input({ type, onChange, label, className }: Props) {
  return (
    <div>
      {label && <p className="text-white text-base font-bold mb-2">{label}</p>}
      <input
        type={type || "text"}
        className={`bg-white w-full px-3 py-2 rounded-md border border-grey-1 focus:outline-none ${className}`}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
