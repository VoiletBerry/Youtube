import React from "react";
import Comments from "./Comments";

const CommentRepliesDetails = ({ data }) => {
  const { comments } = data;
  return (
    <div>
      {comments.map((item) => {
        return <Comments info={item?.snippet} />;
      })}
    </div>
  );
};

export default CommentRepliesDetails;
