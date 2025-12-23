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
        updatetask : (state ,actions)=>{
           
            for(let i=0 ; i<state.task.length ; i++){
                if(state.task[i].id == actions.payload.id){
                 state.task[i].work = actions.payload.work
                }
            }
        },
        taskcomplete : (state , actions) =>{
              for(var i=0; i<state.task.length; i++){
                 if (state.task[i].id==actions.payload.id)
                 {
                    state.task[i].status="complete";
                 }
            }
        },
        taskIncomplete : (state , actions) =>{
             for(var i=0; i<state.task.length; i++){
                 if (state.task[i].id==actions.payload.id)
                 {
                    state.task[i].status="incomplete";
                 }
            }
        }

    }
})

export const {taskadd , deletetask, updatetask , taskcomplete , taskIncomplete } = taskSlice.actions;
export default taskSlice.reducer;