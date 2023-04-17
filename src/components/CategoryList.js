import React, { useContext } from "react";
import { YOUTUBE_LIVE_API } from "../utils/constants";
import { VideoContext } from "../Context/VideoContext";

const CategoryList = () => {
  const { videos, setVideos } = useContext(VideoContext);

  const list = [
    "Translation",
    "Birds",
    "Cricket",
    "Thrillers",
    "News",
    "History",
    "Camping",
    "Movies",
    "Real Estate",
    "Watched",
    "Comedy",
    "Stocks",
    "Podcast",
    "Strategy",
    "Manga",
    "Gaming",
    "Football",
    "Russia",
    "Deep Learning",
    "Github",
  ];

  const getData = async () => {
    const data = await fetch(
      YOUTUBE_LIVE_API + process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className="flex mt-2 ml-5 ">
      <p
        className="mx-1 px-2 py-1 border text-center rounded-lg bg-gray-300 hover:cursor-pointer"
        onClick={() => getData()}
      >
        Live
      </p>
      {list.map((item, index) => (
        <p
          key={index}
          className="mx-1 px-2 py-1 border text-center rounded-lg bg-gray-300 "
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default CategoryList;
