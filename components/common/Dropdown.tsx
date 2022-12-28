import React from "react";
interface Options {
  value: string;
  label: string;
}
interface Props {
  options: Options[];
}
function Dropdown({ options }: Props) {
  return (
    <div>
      <select className="bg-white w-[156px] h-[37px] border border-grey-1 rounded-md px-2">
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
