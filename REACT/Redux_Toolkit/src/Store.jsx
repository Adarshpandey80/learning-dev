import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./counterSlice";
import myColorReducer from "./colorSlice"

const Store = configureStore({
  reducer : {
       counter:myReducer,
       mycolor : myColorReducer,
  }
})

export default Store ;