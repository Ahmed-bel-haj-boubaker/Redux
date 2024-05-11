import { authSlice } from "../Slice/authSlice";
import { counterSlice } from "../Slice/countSlice";
import { configureStore } from "@reduxjs/toolkit";

//const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
