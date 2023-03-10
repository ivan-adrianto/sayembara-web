import React, { useEffect, useState } from "react";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import Button from "./Button";

interface Props {
  data: Contest;
  onClick?: () => void;
}

function ContestCard({ data, onClick }: Props) {
  const [buttonLabel, setButtonLabel] = useState("");
  const [buttonClass, setButtonClass] = useState("");

  useEffect(() => {
    if (data.join_status === "winner") {
      setButtonLabel("Win");
      setButtonClass(
        "text-light-green border-2 border-light-green bg-light-green-transparent"
      );
    } else if (data.join_status === "joined") {
      setButtonLabel("Open");
      setButtonClass("text-blue-1 border-2 border-blue-1 bg-[#54A0FF40]");
    } else {
      setButtonClass("bg-light-green text-white");
      setButtonLabel("Apply");
    }
  }, []);
  return (
    <div
      className="w-full lg:w-[900px] p-[18px] rounded-md text-black-1 mb-9 shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div>
        <div className="flex justify-between mb-2 lg:mb-0">
          <div className="lg:flex">
            <p className="mb-1 lg:mb-0 flex">
              Posted{" "}
              <span className="font-bold">&nbsp;{data.posted_since}</span>{" "}
              <span className="hidden lg:block">&nbsp;|</span>&nbsp;
            </p>
            <p>
              Due date: <span className="font-bold">{data.due_date}</span>{" "}
            </p>
          </div>
          <Button
            label={buttonLabel}
            className={`mt-1 mr-1  ml-2 lg:ml-0 ${buttonClass}`}
          />
        </div>
        <h1 className="text-3xl font-bold text-light-green mb-2 lg:-mt-2">
          {data.title}
        </h1>
      </div>
      <p>
        By <span className="font-bold">{data.provider.fullname}</span>{" "}
      </p>
      <p className="mb-2">IDR {data.prize_text}</p>
      <div className="grid grid-cols-6">
        <p className="col-span-6 lg:col-span-5">{data.description}</p>
      </div>
    </div>
  );
}

export default ContestCard;
