import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openSideBar } from "../ReduxStore/sideBarSlice";
import { VideoContext } from "../Context/VideoContext";

export const Maincontainer = () => {
  const [videos, setVideos] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSideBar());
  }, []);

  return (
    <div className="ml-5">
      <VideoContext.Provider value={{ videos, setVideos }}>
        <CategoryList />
        <VideoContainer />
      </VideoContext.Provider>
    </div>
  );
};
