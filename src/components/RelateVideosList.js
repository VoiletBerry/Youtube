import React from "react";
import RelatedVideoCard from "./RelatedVideoCard";

const RelateVideosList = ({ data }) => {
  console.log("data", data);

  return (
    <div className="w-full">
      <div>
        {data.map((item) => {
          console.log("item", item.id.videoId);
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
