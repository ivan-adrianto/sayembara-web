import React, { ReactElement, ReactNode } from "react";
import Navbar from "../components/common/Navbar";
import Toast from "../components/common/Toast";
interface Props {
  children?: ReactNode[] | ReactElement;
}
function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Toast />
      <div className="lg:pt-[100px] pb-[71px] lg:pb-0 bg-white flex flex-col items-center">
        {children}
      </div>
    </>
  );
}

export default MainLayout;
