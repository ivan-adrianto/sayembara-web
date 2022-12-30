import Router from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesRequest,
  getContestsRequest,
} from "../../redux/actionCreators/contestActionCreators";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import ContestCard from "../common/ContestCard";
import Spinner from "../common/Spinner";
import HomeHeader from "../Homepage/HomeHeader";

interface State {
  loadingGetContests: boolean;
  dataGetContests: Contest[];
  errGetContests: string;
}

function HomeContainer() {
  const dispatch = useDispatch();
  const {
    loadingGetContests: loading,
    dataGetContests: data,
    errGetContests: error,
  }: State = useSelector((state: RootState) => state.contest);
  useEffect(() => {
    dispatch(getContestsRequest({ title: "", category_id: "" }));
    dispatch(getCategoriesRequest());
  }, []);

  const Content = () => {
    if (loading) {
      return (
        <div className="w-[900px] h-[calc(100vh-185px)] flex justify-center items-center">
          <Spinner widthClass="w-10" />
        </div>
      );
    }
    if (error) {
      return (
        <div className="w-[900px] h-[100px] flex justify-center items-center">
          <h1 className="text-xl text-red-500 font-bold">{error}</h1>
        </div>
      );
    }
    return (
      <div className="mt-5">
        {data.map((item, key) => (
          <ContestCard
            key={key}
            data={item}
            onClick={() => Router.push(`/contest/${item.id}`)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-12 px-3 lg:px-0">
      <HomeHeader />
      <Content/>
    </div>
  );
}

export default HomeContainer;
