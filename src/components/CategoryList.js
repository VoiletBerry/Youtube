import React from "react";

const CategoryList = () => {
  const list = [
    "All",
    "Live",
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

  return (
    <div className="flex mt-2 ml-5">
      {list.map((item, index) => (
        <p
          key={index}
          className="mx-1 px-2 py-1 boeder  text-center rounded-lg bg-gray-300"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default CategoryList;
