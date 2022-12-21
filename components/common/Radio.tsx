import React from "react";

interface Props {
  id: string;
  label: string
}
function Radio({ id, label }: Props) {
  return (
    <div className="mr-3 flex items-center text-white font-bold ">
      <input type="radio" name="role" className="hidden" id={id} />
      <label htmlFor={id} className="radio-label flex items-center">
        <div className="rounded-full bg-white h-[17px] w-[17px] flex justify-center items-center cursor-pointer">
          <div className="label-check rounded-full h-[7px] w-[7px] "></div>
        </div>
        <p className="ml-1">{label}</p>
      </label>
    </div>
  );
}

export default Radio;
