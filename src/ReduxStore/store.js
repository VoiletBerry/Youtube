import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchCacheSlice from "./searchCacheSlice";

const store = configureStore({
  reducer: {
    sideBar: sideBarSlice,
    searchCache: searchCacheSlice,
  },
});

export default store;
