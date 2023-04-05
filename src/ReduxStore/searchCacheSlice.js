import { createSlice } from "@reduxjs/toolkit";

const searchCacheSlice = createSlice({
  name: "searchCache",
  initialState: {},
  reducers: {
    storedCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { storedCache } = searchCacheSlice.actions;
export default searchCacheSlice.reducer;
