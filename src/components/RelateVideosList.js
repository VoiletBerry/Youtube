import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

const RelateVideosList = ({ data }) => {
  return (
    <div className="w-full">
      <div>
        {data.map((item) => {
          return (
            <a href={"/watch?v=" + item?.id?.videoId}>
              <RelatedVideoCard info={item} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RelateVideosList;
