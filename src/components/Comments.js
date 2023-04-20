import React from "react";
import { getTimePassedSince } from "../utils/helper";

const Comments = ({ info }) => {
  const {
    publishedAt,
    authorProfileImageUrl,
    authorDisplayName,
    textDisplay,
    likeCount,
  } = info;

  return (
    <div className="p-2 my-2 shadow-lg w-full rounded-lg bg-gray-100">
      <div className="flex">
        <img
          alt="Image"
          className="w-14 h-14 rounded-full"
          src={authorProfileImageUrl}
        />
        <div className="mx-3">
          <div className="flex flex-row">
            <h3 className="font-semibold">{authorDisplayName}</h3>
            <h3 className="ml-3">{getTimePassedSince(publishedAt)}</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: textDisplay }}></div>
          <div className="flex ">
            <i
              className=" fa fa-thumbs-up mt-1"
              onclick="myFunction(this)"
              class="fa fa-thumbs-up mt-1"
            ></i>
            <p className="ml-2 ">{likeCount}</p>
            <i
              className="ml-2 fa fa-thumbs-down mt-1"
              onclick="myFunction(this)"
              class="fa fa-thumbs-down mt-1 ml-2"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
