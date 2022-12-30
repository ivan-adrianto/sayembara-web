import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContestsRequest } from "../../redux/actionCreators/contestActionCreators";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import Dropdown from "../common/Dropdown";
import Input from "../common/Input";

function HomeHeader() {
  const dispatch = useDispatch();
  const { dataCategories } = useSelector((state: RootState) => state.contest);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onChangeCategory = (value: string) => {
    setCategory(value);
    dispatch(getContestsRequest({ title: search, category_id: value }));
  };

  const searchContest = () => {
    dispatch(getContestsRequest({ title: search, category_id: category }));
  };

  return (
    <div className="block lg:flex gap-2 w-fit lg:w-[900px]">
      <div className="flex mb-3 lg:mb-0">
        <Dropdown
          options={dataCategories}
          className="mr-2"
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            onChangeCategory(event.target.value)
          }
          placeholder="All Categories"
        />
        <Input placeholder="Find Contest" onChange={handleChange} className="text-black-1" />
      </div>
      <Button label="Search" type="primary" onClick={searchContest} />
    </div>
  );
}

export default HomeHeader;
