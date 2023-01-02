import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../../redux/actionCreators/authActionCreators";
import Cookie from "js-cookie";

function Navbar() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setIsLoggedIn(false));
    Cookie.remove("token");
    Router.push("/login");
  };
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
          <Link href={"/my-contests"} className="mr-14 text-xl">
            My Contest
          </Link>
          <Link href={"/profile"} className="mr-14 text-xl">
            Profile
          </Link>
          <div onClick={logout} className="mr-14 text-xl cursor-pointer">
            Logout
          </div>
        </div>
      </div>
      <div className="lg:hidden w-screen fixed bottom-0 bg-light-green border-t border-grey-1 h-[71px] grid grid-cols-3">
        <Link
          href={"/profile"}
          className="text-xl flex justify-center items-center"
        >
          <Image
            src={"/icons/icon-profile.svg"}
            alt="profile"
            height={30}
            width={30}
          />
        </Link>
        <Link href={"/"} className="text-xl flex justify-center items-center">
          <Image
            src={"/icons/icon-home.svg"}
            alt="home"
            height={40}
            width={40}
          />
        </Link>
        <Link
          href={"/my-contests"}
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
