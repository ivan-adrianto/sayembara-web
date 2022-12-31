import React from "react";
import SubmitDesignContainer from "../../../components/containers/SubmitDesignContainer";
import Header from "../../../layouts/Header";
import MainLayout from "../../../layouts/MainLayout";

function SubmitPage() {
  return (
    <MainLayout>
      <Header title="Submit Your Design | Sayembara" />
      <SubmitDesignContainer />
    </MainLayout>
  );
}

export default SubmitPage;
