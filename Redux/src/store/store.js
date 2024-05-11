import { createStore } from "redux";
import { counterReducer } from "../reducer/counterReducer";
import { counterSlice } from "../Slice/countSlice";
import { configureStore } from "@reduxjs/toolkit";

//const store = createStore(counterReducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
