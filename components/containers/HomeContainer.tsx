import React from "react";
import ContestCard from "../common/ContestCard";
import HomeHeader from "../Homepage/HomeHeader";

function HomeContainer() {
  return (
    <div className="pt-12">
      <HomeHeader />
      <div className="mt-5">
        {[1, 2, 3, 4].map((item, key) => (
          <ContestCard key={key} />
        ))}
      </div>
    </div>
  );
}

export default HomeContainer;
