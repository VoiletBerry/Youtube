import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../ReduxStore/sideBarSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const HandleToggleSideBar = () => {
    dispatch(toggle());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex p-2 m-2 col-span-1">
        <img
          className="h-8"
          alt="hamburger icon"
          onClick={() => HandleToggleSideBar()}
          src="https://cdn.icon-icons.com/icons2/2761/PNG/512/menu_hamburger_burger_icon_176431.png"
        />
        <img
          className="h-8 ml-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"
        />
      </div>
      <div className="m-2 col-span-10 text-center">
        <input
          className="w-1/2 h-9 border rounded-l-full text-center border-gray-200"
          placeholder="Search"
          type="text"
        />
        <button className="h-9 w-12 bg-gray-100 border rounded-r-full text-center border-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12 "
          alt="profile pic"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
