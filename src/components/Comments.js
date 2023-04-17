import React from "react";

const Comments = ({ info }) => {
  const { name, description, img } = info;

  return (
    <div className="p-2 my-2 shadow-lg w-full rounded-lg bg-gray-100">
      <div className="flex">
        <img alt="profilePic" className="w-14 h-14 rounded-full" src={img} />
        <div className="mx-3">
          <h3 className="font-semibold"> {name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
