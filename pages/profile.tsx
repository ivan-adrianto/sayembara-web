import React from "react";
import ProfileContainer from "../components/containers/ProfileContainer";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <Header title="Profile | Sayembara" />
      <ProfileContainer />
    </MainLayout>
  );
}

export default Profile;
