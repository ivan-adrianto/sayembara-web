import axios from "axios";
import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyContestsRequest } from "../../redux/actionCreators/contestActionCreators";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import ContestCard from "../common/ContestCard";
import Spinner from "../common/Spinner";

interface State {
  dataGetMyContests: Contest[];
  loadingGetMyContests: boolean;
}

function MyContestsContainer() {
  const dispatch = useDispatch();
  const { dataGetMyContests: data, loadingGetMyContests: loading }: State =
    useSelector((state: RootState) => state.contest);
  useEffect(() => {
    dispatch(getMyContestsRequest());
  }, []);
  return (
    <div className="lg:w-[900px] w-screen px-3 lg:px-0">
      <h1 className="text-3xl font-bold mt-5 lg:mt-11 mb-5">My Contests</h1>
      {loading && (
        <div className="lg:w-[900px] h-[calc(100vh-185px)] flex justify-center items-center">
          <Spinner widthClass="w-10" />
        </div>
      )}
      {!loading &&
        data?.map((item, index) => (
          <ContestCard
            data={item}
            key={index}
            onClick={() => Router.push(`/contest/${item.id}`)}
          />
        ))}
      {!loading && data?.length === 0 && (
        <div className="w-full lg:w-[900px]">
          <h1 className="font-bold mt-5 lg:mt-11 mb-5">
            You have not joined any contests.
          </h1>
          <Button
            label="Find Contests"
            type="primary"
            onClick={() => Router.push("/")}
            className="w-[173px]"
          />
        </div>
      )}
    </div>
  );
}

export default MyContestsContainer;
