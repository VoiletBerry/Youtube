import React from "react";
import { getTimePassedSince } from "../utils/helper";

const RelatedVideoCard = ({ info }) => {
  console.log("info", info);

  const { id } = info;
  const { videoId } = id;
  const { snippet } = info;
  const { channelTitle, publishedAt, title } = snippet;
  const { thumbnails } = snippet;

  console.log(videoId);

  return (
    <div className=" m-2 p-2 border rounded-lg flex flex-row">
      <img
        className="rounded-lg w-[168px] h-[94px]"
        alt="image"
        src={thumbnails.medium.url}
      />
      <div className="flex flex-col ml-2">
        {title.length > 30 && (
          <div className="font-semibold">{title.slice(0, 40) + "...."}</div>
        )}
        {title.length < 30 && <div className="font-semibold">{title}</div>}
        <div>{channelTitle}</div>
        <div className="flex flex-row">
          <div>{getTimePassedSince(publishedAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
