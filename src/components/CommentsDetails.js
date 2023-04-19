import React from "react";
import Comments from "./Comments";

const CommentsDetails = ({ data }) => {
  const { snippet } = data;
  const { topLevelComment } = snippet;

  return (
    <div>
      <Comments info={topLevelComment?.snippet} />
    </div>
  );
};

export default CommentsDetails;
