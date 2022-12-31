import Image from "next/image";
import React from "react";
import Button from "../common/Button";

function SubmitDesignContainer() {
  return (
    <div className="w-[574px]">
      <div className="bg-grey-2 rounded-md px-6 py-[18px] mt-12">
        <div className="flex justify-center mt-8 mb-14">
          <p className="text-2xl ">Upload or Drag & Drop your file</p>
        </div>
        <div className="grid grid-cols-5 justify-center">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div>
              <Image
                src={
                  "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
                }
                alt=""
                height={93}
                width={93}
                className="col-span-1 border-4 border-white"
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-14 font-bold mb-1">Description</p>
      <textarea cols={30} rows={5} className="border rounded border-grey-1 mb-9 w-full"/>
      <Button label="Submit" type="primary" submit className="m-auto w-[138px]"/>
    </div>
  );
}

export default SubmitDesignContainer;
