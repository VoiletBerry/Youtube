import React from "react";
import Comments from "./Comments";
import CommentsDetails from "./CommentsDetails";
import CommentRepliesDetails from "./CommentRepliesDetails";

const CommentsList = ({ details }) => {
  console.log("details", details);
  return (
    <div className="w-full">
      {details.map((item) => {
        return (
          <div>
            <CommentsDetails data={item} />
            {item.replies && (
              <div className="ml-5 border pl-2 border-l-black border-r-neutral-50 border-t-neutral-50 border-b-neutral-50">
                <CommentRepliesDetails data={item?.replies} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsList;
