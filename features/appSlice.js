import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  location: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState: intialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { setLocation } = appSlice.actions;

export const selectLocation = (state) => state.app.location;

export default appSlice.reducer;
