import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
};

const r1Slice = createSlice({
  name: "r1Slice",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      console.log("r1Slice");
      state.counter += 1;
      return state;
    },
    decrement: (state) => {
      state.counter -= 1;
      return state;
    },
    nochange: (state) => state
  }
});

const r2Slice = createSlice({
  name: "r2Slice",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      console.log("r2Slice");
      state.counter += 1;
      return state;
    },
    decrement: (state) => {
      state.counter -= 1;
      return state;
    },
    nochange: (state) => state
  }
});

export const r1Reducer = r1Slice.reducer;
export const r1Actions = r1Slice.actions;
export const r2Reducer = r2Slice.reducer;
export const r2Actions = r2Slice.actions;
