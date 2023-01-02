import React from "react";
import MyContestsContainer from "../components/containers/MyContestsContainer";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";

function MyContests() {
  return (
    <MainLayout>
      <Header title="My Contests | Sayembara" />
      <MyContestsContainer />
    </MainLayout>
  );
}

export default MyContests;
