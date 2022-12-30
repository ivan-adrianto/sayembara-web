import React, { ChangeEvent } from "react";
interface Options {
  value: string;
  label: string;
}
interface Props {
  options: Options[];
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}
function Dropdown({ options, className, onChange, placeholder }: Props) {
  return (
    <div className={className}>
      <select
        className="bg-white w-[156px] h-[37px] border border-grey-1 rounded-md px-2 text-black-1"
        onChange={onChange}
      >
        {placeholder && <option value={""}>{placeholder}</option>}
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
