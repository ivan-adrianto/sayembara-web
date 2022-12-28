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
    <div className="flex gap-2 w-[900px]">
      <Dropdown options={categories} />
      <Input placeholder="Find Contest" />
      <Button label="Search" type="primary" />
    </div>
  );
}

export default HomeHeader;
