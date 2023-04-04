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
  },
});

export const { toggle, closeSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;
