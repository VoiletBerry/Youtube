import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideBar } from "../ReduxStore/sideBarSlice";
import CommentsContainer from "./CommentsContainer";
import { ONE_VIDEO_DETAILS, RELATED_VIDEOS } from "../utils/constants";
import RelateVideosList from "./RelateVideosList";

const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const [relatedVideos, setRelatedVideos] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar());
    getVideoDetails();
    getRelatedVideos();
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(
      ONE_VIDEO_DETAILS +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
  };

  const getRelatedVideos = async () => {
    const data = await fetch(
      RELATED_VIDEOS +
        searchParams.get("v") +
        "&type=video&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    setRelatedVideos(json?.items);
  };

  if (!relatedVideos) {
    return null;
  }

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col m-5 p-2">
        <div>
          <iframe
            width="1250"
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
      <div className="flex flex-col mt-3 p-2 w-[452px]">
        <RelateVideosList data={relatedVideos} />
      </div>
    </div>
  );
};

export default WatchVideo;
