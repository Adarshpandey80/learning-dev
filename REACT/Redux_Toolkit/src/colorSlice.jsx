import { createSlice } from "@reduxjs/toolkit";
import reducer from "./counterSlice";


const colorSlice = createSlice({
    name : "mycolor",
    initialState: {
        color : "red"
    },
    reducers: {
        changeColor : (state , actions)=>{
             state.color = actions.payload.bgclr
        }
    }
})


export const {changeColor} = colorSlice.actions
export default colorSlice.reducer;