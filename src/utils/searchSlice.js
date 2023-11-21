import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchVisible: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleSearch: (state) => {
      state.isSearchVisible = !state.isSearchVisible;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearch, addMovieResults } = searchSlice.actions;

export default searchSlice.reducer;
