import { useState } from "react"
import {taskadd} from "./taskSlice"
import {useSelector , useDispatch} from "react-redux"
  

function App() {
  const [task , setTask] = useState("")
  const dispatch = useDispatch();
  const mytask = useSelector(state=>state.mytask.task)

 const alltask = mytask.map((key)=>{
       return (
        <>
        <tr>
              <td>{key.work}</td>
         </tr>
        </>
             
       )
 })

  return (
    <>
     <h1>this is doto list </h1>
     add task : <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} /> <button onClick={()=>{dispatch(taskadd( {work : task}))}} >add task</button>
 
     <table>
     <tr>
      <th>
        work 
      </th>
     </tr>
       {alltask}
     </table>
    </>
  )
}

export default App
