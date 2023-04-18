import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../ReduxStore/sideBarSlice";
import { SEARCH, logo } from "../utils/constants";
import { storedCache } from "../ReduxStore/searchCacheSlice";
import { Link } from "react-router-dom";

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
    if (searchQuery) {
      const arr = [];
      const data = await fetch(SEARCH + searchQuery);
      const json = await data.text();

      json.split("[").forEach((ele, index) => {
        if (!ele.split('"')[1] || index === 1) return;
        return arr.push(ele.split('"')[1]);
      });

      setSearchSuggestion(arr);
      dispatch(
        storedCache({
          [searchQuery]: arr,
        })
      );
    }
  };

  useEffect(() => {
    const searchResult = setTimeout(() => {
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
        <svg
          fill="none"
          className="h-8"
          stroke="currentColor"
          stroke-width="1.5"
          onClick={() => HandleToggleSideBar()}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          ></path>
        </svg>
        <Link to="/">
          <img className="h-8 ml-2" alt="logo" src={logo} />
        </Link>
      </div>
      <div className="m-2 col-span-6">
        <div>
          <input
            className="w-1/2 h-9 border rounded-l-full  pl-7 border-gray-200"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setDropDown(true)}
            type="text"
          />
          <button className="h-9 w-12 bg-gray-100 border rounded-r-full text-center border-gray-200">
            🔍
          </button>
        </div>
        {dropDown && (
          <div
            className=" bg-white absolute mx-3 my-1 p-2 shadow-lg rounded-lg w-[32rem] border-gray-200 "
            onBlur={() => setDropDown(false)}
          >
            <ul>
              {searchSuggestion.slice(0, -1).map((item, index) => {
                return (
                  <Link to={"/searchResult?result=" + item} key={index}>
                    <li className="ml-1 hover:bg-gray-100 p-1">🔍 {item}</li>
                  </Link>
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
