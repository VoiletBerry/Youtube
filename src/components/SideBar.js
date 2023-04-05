import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isSideBarVisible = useSelector(
    (store) => store.sideBar.isSideBarVisible
  );

  if (!isSideBarVisible) {
    return null;
  }

  return (
    <div className="mx-2 w-44 p-2 shadow-lg">
      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>📽️ Shorts</li>
        <li>📹 Subscription</li>
      </ul>
      <ul className="mt-5">
        <li>🏬 Libray</li>
        <li>🕒 History</li>
        <li>⏱️ Watch Later</li>
        <li>👍 Liked Videos</li>
      </ul>
      <ul className="mt-5">
        <li>🔥 Trending</li>
        <li>🎮 Gaming</li>
        <li>🎵 Music</li>
        <li>📰 News</li>
        <li>🎾 Sports</li>
      </ul>
    </div>
  );
};

export default SideBar;
