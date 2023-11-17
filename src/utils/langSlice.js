import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: {
    langKey: "eng",
  },

  reducers: {
    changeLanguage: (state, action) => {
      state.langKey = action.payload;
    },
  },
});

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;
