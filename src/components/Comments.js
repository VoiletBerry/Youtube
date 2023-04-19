import React from "react";

const Comments = ({ info }) => {
  // console.log("info", info);

  return (
    <div className="p-2 my-2 shadow-lg w-full rounded-lg bg-gray-100">
      <div className="flex">
        <img
          alt="profilePic"
          className="w-14 h-14 rounded-full"
          src={info?.authorProfileImageUrl}
        />
        <div className="mx-3">
          <h3 className="font-semibold">{info?.authorDisplayName}</h3>
          <p>{info?.textDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
