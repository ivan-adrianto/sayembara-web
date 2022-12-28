import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContestsRequest } from "../../redux/actionCreators/contesActionCreators";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import ContestCard from "../common/ContestCard";
import Spinner from "../common/Spinner";
import HomeHeader from "../Homepage/HomeHeader";

interface State {
  loadingGetContests: boolean;
  dataGetContests: Contest[];
  errGetContests: Error | string | unknown;
}

function HomeContainer() {
  const dispatch = useDispatch();
  const {
    loadingGetContests: loading,
    dataGetContests: data,
  }: State = useSelector((state: RootState) => state.contest);
  useEffect(() => {
    dispatch(getContestsRequest({ category_id: "", title: "" }));
  }, []);
  return (
    <div className="pt-12">
      <HomeHeader />
      {loading ? (
        <div className="w-[900px] h-[calc(100vh-185px)] flex justify-center items-center">
          <Spinner widthClass="w-10" />
        </div>
      ) : (
        data && (
          <div className="mt-5">
            {data.map((item, key) => (
              <ContestCard key={key} data={item} />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default HomeContainer;
