import axios from "axios";
import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyContestsRequest } from "../../redux/actionCreators/contestActionCreators";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
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
    <div>
      <h1 className="text-3xl font-bold mt-5 lg:mt-11 mb-5">My Contests</h1>
      {loading && (
        <div className="w-[900px] h-[calc(100vh-185px)] flex justify-center items-center">
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
    </div>
  );
}

export default MyContestsContainer;
