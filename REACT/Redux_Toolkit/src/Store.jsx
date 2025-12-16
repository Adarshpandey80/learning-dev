import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice";

const Store = configureStore({
  reducer : {
       counter:myReducer
  }
})

export default Store ;