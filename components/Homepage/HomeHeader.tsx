import React from "react";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";

function HomeHeader() {
  const categories = [
    { label: "Open", value: "open" },
    { label: "Closed", value: "closed" },
  ];
  return (
    <div className="block lg:flex gap-2 w-fit lg:w-[900px]">
      <div className="flex mb-3 lg:mb-0">
        <Dropdown options={categories} className="mr-2" />
        <Input placeholder="Find Contest" />
      </div>
      <Button label="Search" type="primary" />
    </div>
  );
}

export default HomeHeader;
