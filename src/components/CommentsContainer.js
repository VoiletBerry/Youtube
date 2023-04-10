import React, { useState } from "react";
import Comments from "./Comments";
import { COMMENTS_DATA } from "../Mocks/commentMockData";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const [commentData, setCommentData] = useState(COMMENTS_DATA);

  console.log(commentData);

  return (
    <div className="mt-5 w-2/3">
      <h1 className="font-bold my-2 "> Comments : </h1>
      <CommentsList data={commentData} />
    </div>
  );
};

export default CommentsContainer;
