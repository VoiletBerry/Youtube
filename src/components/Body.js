import React from "react";

import { Maincontainer } from "./Maincontainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
