import { configureStore } from "@reduxjs/toolkit";
import { r1Reducer, r2Reducer } from "./reducer";

const store = configureStore({
  reducer: {
    myReducer1: r1Reducer,
    myReducer2: r2Reducer
  }
});

export { store };
