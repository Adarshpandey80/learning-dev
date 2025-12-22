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
        },
        deletetask : (state , actions) => {
            state.task = state.task.filter(item=>item.id !== actions.payload.id)
        },
        editform : (state ,actions)=>{
            
        }
    }
})

export const {taskadd , deletetask, editform} = taskSlice.actions;
export default taskSlice.reducer;