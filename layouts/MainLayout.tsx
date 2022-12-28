import React, { ReactElement, ReactNode } from "react";
import Navbar from "../components/common/Navbar";
interface Props {
  children?: ReactNode[] | ReactElement;
}
function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] bg-white flex flex-col items-center">{children}</div>
    </>
  );
}

export default MainLayout;
