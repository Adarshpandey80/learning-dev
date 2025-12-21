import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasktodo",
    initialState:{
        task : []
    } ,
    reducers:{
        taskadd : (state, actions)=>  {
            console.log(actions.payload)
           state.task.push(actions.payload);
        }

    }
})

export const {taskadd} = taskSlice.actions;
export default taskSlice.reducer;