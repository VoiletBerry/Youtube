import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../ReduxStore/sideBarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { storedCache } from "../ReduxStore/searchCacheSlice";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const cacheData = useSelector((store) => store.searchCache);

  const dispatch = useDispatch();

  const HandleToggleSideBar = () => {
    dispatch(toggle());
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestion(json[1]);
    dispatch(
      storedCache({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    const searchResult = setTimeout(() => {
      // console.log("cacheData => ", cacheData);
      // console.log("cacheData[searchQuery]  => ", cacheData[searchQuery]);
      if (cacheData[searchQuery]) {
        setSearchSuggestion(cacheData[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(searchResult);
    };
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex p-2 m-2 col-span-4">
        <img
          className="h-8"
          alt="hamburger icon"
          onClick={() => HandleToggleSideBar()}
          src="https://cdn.icon-icons.com/icons2/2761/PNG/512/menu_hamburger_burger_icon_176431.png"
        />
        <img
          className="h-8 ml-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1024px-YouTube_Logo_%282013-2017%29.svg.png"
        />
      </div>
      <div className="m-2 col-span-6">
        <div>
          <input
            className="w-1/2 h-9 border rounded-l-full  pl-7 border-gray-200"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setDropDown(true)}
            onBlur={() => setDropDown(false)}
            type="text"
          />
          <button className="h-9 w-12 bg-gray-100 border rounded-r-full text-center border-gray-200">
            🔍
          </button>
        </div>
        {dropDown && (
          <div className=" bg-white absolute mx-3 my-1 p-2 shadow-lg rounded-lg w-[32rem] border-gray-200">
            <ul>
              {searchSuggestion.map((item, index) => {
                return (
                  <li key={index} className="ml-1 hover:bg-gray-100 p-1">
                    🔍 {item}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img
          className="h-12 "
          alt="profile pic"
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
