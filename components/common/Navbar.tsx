import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div className="w-screen justify-between h-[100px] items-center bg-white border-b border-grey-1 hidden lg:flex fixed">
        <Link href={"/"}>
          <Image
            src={"/icons/sayembara-logo.svg"}
            alt="sayembara"
            width={174}
            height={65}
            className="ml-14 w-[174px] h-[65px]"
            priority
          />
        </Link>
        <div className="flex">
          <Link href={"/my-contest"} className="mr-14 text-xl">
            My Contest
          </Link>
          <Link href={"/profile"} className="mr-14 text-xl">
            Profile
          </Link>
          <Link href={"/logout"} className="mr-14 text-xl">
            Logout
          </Link>
        </div>
      </div>
      <div className="lg:hidden w-screen fixed bottom-0 bg-light-green border-t border-grey-1 h-[71px] grid grid-cols-3">
        <Link
          href={"/my-contest"}
          className="text-xl flex justify-center items-center"
        >
          <Image
            src={"/icons/icon-profile.svg"}
            alt="profile"
            height={30}
            width={30}
          />
        </Link>
        <Link
          href={"/profile"}
          className="text-xl flex justify-center items-center"
        >
          <Image
            src={"/icons/icon-home.svg"}
            alt="home"
            height={40}
            width={40}
          />
        </Link>
        <Link
          href={"/logout"}
          className="text-xl justify-center items-center flex"
        >
          <Image
            src={"/icons/icon-menu.svg"}
            alt="menu"
            height={30}
            width={30}
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
