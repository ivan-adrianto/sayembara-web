import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="w-screen fixed justify-between h-[100px] items-center bg-white flex border-b border-grey-1">
      <Image src={"/icons/sayembara-logo.svg"} alt="sayembara" width={174} height={65} className="ml-14" />
      <div className="flex">
        <Link href={'/my-contest'} className="mr-14 text-xl">My Contest</Link>
        <Link href={'/profile'} className="mr-14 text-xl">Profile</Link>
        <Link href={'/logout'} className="mr-14 text-xl">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
