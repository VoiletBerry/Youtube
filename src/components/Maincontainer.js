import React, { useEffect } from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSideBar } from "../ReduxStore/sideBarSlice";

export const Maincontainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSideBar());
  }, []);

  return (
    <div>
      <CategoryList />
      <VideoContainer />
    </div>
  );
};
