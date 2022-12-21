import Image from "next/image";
import React, { ReactElement } from "react";
import bg from "../assets/img/auth-bg.png"
interface Props {
  className?: String;
  children?: never[] | ReactElement;
}
function Auth({ children }: Props) {
  return (
    <div style={{backgroundImage: 'url(/img/auth-bg.png)'}} className="bg-no-repeat bg-cover">
      {children}

      {/* <Image src={bg} alt="sayembara" className="h-screen" /> */}
    </div>
  );
}

export default Auth;
