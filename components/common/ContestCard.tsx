import React from "react";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import Button from "./Button";

interface Props {
  data: Contest;
}

function ContestCard({ data }: Props) {
  return (
    <div className="w-[900px] p-[18px] rounded-md text-black-1 mb-9 shadow-lg">
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <p>
              Posted <span className="font-bold">{data.posted_since}</span>{" "}
              |&nbsp;
            </p>
            <p>
              Due date: <span className="font-bold">{data.due_date}</span>{" "}
            </p>
          </div>
          <h1 className="text-3xl font-bold text-light-green mt-3 mb-2">
            {data.title}
          </h1>
        </div>
        <Button label="Apply" type="primary" className="mt-1 mr-1" />
      </div>
      <p>
        By <span className="font-bold">{data.provider.fullname}</span>{" "}
      </p>
      <p className="mb-2">IDR {data.prize_text}</p>
      <div className="grid grid-cols-6">
        <p className="col-span-5">{data.description}</p>
      </div>
    </div>
  );
}

export default ContestCard;
