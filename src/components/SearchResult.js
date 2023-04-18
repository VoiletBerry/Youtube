import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_KEYWORD } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCardLandscape from "./VideoCardLandscape";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSideBar } from "../ReduxStore/sideBarSlice";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openSideBar());
  }, []);

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
    console.log(json?.items);
  };

  return searchResults.length === 0 ? null : (
    <div className="col-span-2">
      <div className="flex flex-col">
        {searchResults.map((item) => {
          return (
            <Link to={"/watch?v=" + item.id.videoId}>
              <VideoCardLandscape data={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
