import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchVisible: false,
  },
  reducers: {
    toggleSearch: (state) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
  },
});

export const { toggleSearch } = searchSlice.actions;

export default searchSlice.reducer;
