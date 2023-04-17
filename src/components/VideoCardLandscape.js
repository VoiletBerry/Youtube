import React from "react";
import { getTimePassedSince } from "../utils/helper";

const VideoCardLandscape = ({ data }) => {
  const { snippet } = data;
  const { title, thumbnails, channelTitle, publishTime } = snippet;

  const dateString = publishTime;
  const timePassed = getTimePassedSince(dateString);

  return (
    <div className="p-2 m-2 shadow-lg border h-52 border-gray-200 rounded-lg w-[1080px] hover:scale-105 flex flex-row">
      <img
        className="rounded-lg w-[360px]"
        alt="thmbnail"
        src={thumbnails.high.url}
      />
      <div className="flex flex-col ml-4">
        <p className="font-bold ">{title}</p>
        <div className="flex flex-row ">
          <p className="text-lg mr-3">{channelTitle}</p>
          <p>🕒</p>
          <p className="text-base ">{timePassed}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCardLandscape;
