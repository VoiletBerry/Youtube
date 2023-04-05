import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isSideBarVisible: true,
  },
  reducers: {
    toggle: (state) => {
      state.isSideBarVisible = !state.isSideBarVisible;
    },
    closeSideBar: (state) => {
      state.isSideBarVisible = false;
    },
    openSideBar: (state) => {
      state.isSideBarVisible = true;
    },
  },
});

export const { toggle, closeSideBar, openSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
