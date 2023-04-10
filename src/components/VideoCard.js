import React from "react";

const VideoCard = ({ data }) => {
  const { snippet, statistics } = data;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 shadow-lg border border-gray-200 rounded-lg w-80 hover:scale-110">
      <img className="rounded-lg" alt="thmbnail" src={thumbnails.medium.url} />
      <p className="font-bold">{title}</p>
      <p className="text-lg">{channelTitle}</p>
      <p className="text-lg">{viewCount} views</p>
    </div>
  );
};

export default VideoCard;
