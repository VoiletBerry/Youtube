import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_KEYWORD } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCardLandscape from "./VideoCardLandscape";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchParams.get("result"));

  useEffect(() => {
    getVideosByKeyword();
  }, [searchParams]);

  const getVideosByKeyword = async () => {
    const data = await fetch(
      YOUTUBE_VIDEOS_KEYWORD +
        process.env.REACT_APP_YOUTUBE_API_KEY +
        "&q=" +
        searchParams.get("result")
    );
    const json = await data.json();
    setSearchResults(json?.items);
    // console.log(json);
    console.log(json?.items);
  };

  return searchResults.length === 0 ? null : (
    <div className="flex flex-col items-center">
      {searchResults.map((item) => {
        return (
          <Link to={"/watch?v=" + item.id.videoId}>
            <VideoCardLandscape data={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResult;
