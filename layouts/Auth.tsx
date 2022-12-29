import React, { ReactElement } from "react";
interface Props {
  className?: String;
  children?: never[] | ReactElement;
}
function Auth({ children }: Props) {
  return (
    <div style={{backgroundImage: 'url(/img/auth-bg.png)'}} className="bg-no-repeat bg-cover">
      {children}
    </div>
  );
}

export default Auth;
