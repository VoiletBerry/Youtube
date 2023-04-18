import React, { useContext, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { VideoContext } from "../Context/VideoContext";

const VideoContainer = () => {
  const { videos, setVideos } = useContext(VideoContext);

  const getVideos = async () => {
    const data = await fetch(
      YOUTUBE_VIDEOS_URL + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();

    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (!videos) {
    return null;
  }

  return videos[0].id.videoId ? (
    <div className="m-5 flex flex-wrap">
      {videos.map((item) => {
        return (
          <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  ) : (
    <div className="m-5 flex flex-wrap">
      {videos.map((item) => {
        return (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
