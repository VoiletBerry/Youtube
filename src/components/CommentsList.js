import React from "react";
import Comments from "./Comments";

const CommentsList = ({ data }) => {
  console.log("data from comments list", data);

  return (
    <div className="w-full">
      {data.map((item) => {
        return (
          <div>
            <Comments info={item} />
            <div className="ml-5 border pl-2 border-l-black border-r-neutral-50 border-t-neutral-50 border-b-neutral-50">
              <CommentsList data={item.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
