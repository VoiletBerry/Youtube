import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState();

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

  return (
    <div className="m-5  flex flex-wrap">
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
