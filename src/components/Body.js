import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="col-span-2">
        <SideBar />
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
