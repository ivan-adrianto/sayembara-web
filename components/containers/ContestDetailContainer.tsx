import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "../common/Button";
import SubmissionCard from "../ContestDetail/SubmissionCard";

function ContestDetailContainer() {
  const router = useRouter();
  useEffect(() => {
    
  },[])
  return (
    <div className="flex flex-col items-center pb-12">
      <div className="w-[600px]">
        <h1 className="text-3xl font-bold mt-11 mb-4">
          Glints Poster Design Contest
        </h1>
        <p className="mb-4">
          Status: <span className="font-bold">Open</span>
        </p>
        <p className="mb-4">
          Winner Prize: <span className="font-bold">IDR 5.000.000</span>
        </p>
        <p className="mb-4">
          Due Date: <span className="font-bold">Sunday, 28 July 2020</span>
        </p>
        <p className="mb-6">
          Announcement:
          <span className="font-bold"> Sunday, 5 August 2020 </span>
        </p>
        <p className="text-black-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          volutpat massa, ut tempor massa. Maecenas eu efficitur elit, ac ornare
          mi. Cras nulla purus, consequat at aliquam nec, vehicula id eros.
          Maecenas in dapibus arcu, a dignissim enim. Suspendisse potenti.
          Curabitur feugiat tincidunt mollis. Quisque vel rutrum elit.
          Vestibulum sed ipsum scelerisque, ornare quam pretium, tristique arcu.
          Aenean Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent nec volutpat massa, ut tempor massa. Maecenas eu efficitur
          elit, ac ornare mi. Cras nulla purus, consequat at aliquam nec,
          vehicula id eros. Maecenas in dapibus arcu, a dignissim enim.
          Suspendisse potenti. Curabitur feugiat tincidunt mollis. Quisque vel
          rutrum elit. Vestibulum sed ipsum scelerisque, ornare quam pretium,
          tristique arcu. Aenean{" "}
        </p>
        <div className="flex justify-center my-10">
          <Button
            label="Submit your work"
            type="primary"
            onClick={() => router.push("/")}
            className="w-[176px] font-bold"
          />
        </div>
      </div>
      <div>
        <div className="flex justify-center font-bold text-3xl mb-[52px]">
          <p>Submission</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <SubmissionCard key={index} className="col-span-1" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContestDetailContainer;
