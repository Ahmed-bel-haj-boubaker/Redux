import { createStore } from "redux";
import { counterReducer } from "../reducer/counterReducer";
import { counterSlice } from "../Slice/countSlice";

//const store = createStore(counterReducer);
const store = createStore(counterSlice.reducer);

export default store;
