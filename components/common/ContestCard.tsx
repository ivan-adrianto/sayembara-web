import React from "react";
import Button from "./Button";

function ContestCard() {
  return (
    <div className="w-[900px] p-[18px] rounded-md text-black-1 mb-9 shadow-lg">
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <p>
              Posted <span className="font-bold">5 min ago</span> |&nbsp;
            </p>
            <p>
              Due date: <span className="font-bold">Sunday, 28 July 2020</span>{" "}
            </p>
          </div>
          <h1 className="text-3xl font-bold text-light-green mt-3 mb-2">
            Pertamina Logo Design Contest
          </h1>
        </div>
        <Button label="Apply" type="primary" className="mt-1 mr-1" />
      </div>
      <p>
        By <span className="font-bold">Pertamina</span>{" "}
      </p>
      <p className="mb-2">IDR 15.000.000</p>
      <div className="grid grid-cols-6">
        <p className="col-span-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          volutpat massa, ut tempor massa. Maecenas eu efficitur elit, ac ornare
          mi. Cras nulla purus, consequat at aliquam nec, vehicula id eros.
          Maecenas in dapibus arcu, a dignissim enim. Suspendisse potenti.
          Curabitur feugiat tincidunt mollis. Quisque vel rutrum elit.
          Vestibulum sed ipsum scelerisque, ornare quam pretium, tristique arcu.
          Aenean{" "}
        </p>
      </div>
    </div>
  );
}

export default ContestCard;
