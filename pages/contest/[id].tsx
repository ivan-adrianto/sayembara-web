import React from "react";
import { useSelector } from "react-redux";
import ContestDetailContainer from "../../components/containers/ContestDetailContainer";
import Header from "../../layouts/Header";
import MainLayout from "../../layouts/MainLayout";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";

interface State {
  dataGetContestDetail: Contest | null
}

function ContestDetail() {
  const { dataGetContestDetail: data }: State = useSelector(
    (state: RootState) => state.contest
  );
  return (
    <MainLayout>
      <Header title={`${data?.title || 'Detail'} | Sayembara`} />
      <ContestDetailContainer />
    </MainLayout>
  );
}

export default ContestDetail;
