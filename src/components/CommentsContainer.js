import React, { useEffect, useState } from "react";

import CommentsList from "./CommentsList";
import { COMMENT_THREAD_LIST } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const CommentsContainer = () => {
  const [commentsDetail, setCommentsDetails] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getCommentsList();
  }, []);

  const getCommentsList = async () => {
    const data = await fetch(
      COMMENT_THREAD_LIST +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    setCommentsDetails(json?.items);
  };

  return commentsDetail.length === 0 ? null : (
    <div className="mt-5 w-[1250px]">
      <h1 className="font-bold my-2 "> Comments : </h1>
      <CommentsList details={commentsDetail} />
    </div>
  );
};

export default CommentsContainer;
