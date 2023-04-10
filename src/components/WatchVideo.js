import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../ReduxStore/sideBarSlice";
import CommentsContainer from "./CommentsContainer";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  return (
    <div className="flex flex-col m-5 p-2">
      <div>
        <iframe
          width="1380"
          z
          height="625"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchVideo;
