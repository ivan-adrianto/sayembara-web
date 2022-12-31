import Image from "next/image";
import React from "react";
import Button from "../common/Button";

function SubmitDesignContainer() {
  return (
    <div className="lg:w-[574px] px-3 pb-5">
      <div className="bg-grey-2 rounded-md px-6 py-[18px] mt-3 lg:mt-12">
        <div className="flex justify-center mt-0 lg:mt-8 mb-4 lg:mb-14 ">
          <p className="text-2xl ">Upload or Drag & Drop your file</p>
        </div>
        <div className="flex-wrap lg:grid lg:grid-cols-5 justify-center">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div>
              <Image
                src={
                  "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
                }
                alt=""
                height={93}
                width={93}
                className="col-span-1 border-4 border-white mb-5 lg:mb-0 w-full lg:w-[93px]"
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 lg:mt-14 font-bold mb-1">Description</p>
      <textarea cols={30} rows={5} className="border rounded border-grey-1 lg:mb-9 mb-5 w-full"/>
      <Button label="Submit" type="primary" submit className="m-auto w-[138px]"/>
    </div>
  );
}

export default SubmitDesignContainer;
