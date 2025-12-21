import { configureStore } from "@reduxjs/toolkit";
import myreducer from "./taskSlice"
const Store = configureStore({
    reducer:{
        mytask: myreducer
    }
})

export default Store;