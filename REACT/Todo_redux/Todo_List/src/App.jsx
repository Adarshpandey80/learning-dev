import { useState } from "react"
import {taskadd, deletetask} from "./taskSlice"
import {useSelector , useDispatch } from "react-redux"
  import { MdDelete } from "react-icons/md";
 

function App() {
  const [task , setTask] = useState("")
  const [btn , setBtn] = useState(true);
  const dispatch = useDispatch();
  const mytask = useSelector(state=>state.mytask.task)


  const edittask = (work)=>{
      setTask(work);
      setBtn(false)
  }

 const alltask = mytask.map((key)=>{
       return (
        <>
        <tr>
              <td>{key.work}</td>
              <td>  <button><MdDelete onClick={()=>{dispatch(deletetask( {id : key.id}))}} /> </button>  </td>
               <rd> <button onClick={()=>{edittask(key.work)}}>Edit</button></rd>
               
              
         </tr>
        </>
             
       )
 })

  return (
    <>
     <h1>this is doto list </h1>
     add task : <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />

     {
      btn? (<> 
        <button onClick={()=>{dispatch(taskadd( { id: Date.now() , work : task}))}} >add task</button>
      </>):( <>
             <button onClick={}>Update</button>
      </>)
     }
     
    

     <table>
     <tr>
      <th>
        work 
      </th>
      <th></th>
     </tr>
       {alltask}
     </table>
    </>
  )
}

export default App
