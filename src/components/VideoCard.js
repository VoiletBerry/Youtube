import React from "react";
import { getViewCount } from "../utils/helper";

const VideoCard = ({ data }) => {
  console.log(data);
  const { snippet } = data;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg border h-96 border-gray-200 rounded-lg w-80 hover:scale-105 flex flex-col">
      <img className="rounded-lg" alt="thmbnail" src={thumbnails.medium.url} />
      <p className="font-bold">{title}</p>
      <div className="flex flex-col justify-end">
        <p className="text-lg">{channelTitle}</p>
        <p className="text-lg">
          {getViewCount(data?.statistics?.viewCount)} Views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
