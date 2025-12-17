import { useState } from 'react'
import Counter from './counter'
import { useSelector , useDispatch } from 'react-redux'
import { changeColor } from './colorSlice'



function App() {

  const clr = useSelector(state=>state.mycolor.color)
  const dispatch = useDispatch();
  const [color , setColor] = useState("");


  return (
    <>
     <h1> this is redux class</h1>
      <Counter /> <br /> <br /> <br />
      inter your color : <input type="text" value={color} onChange={(e)=>{setColor(e.target.value)}} />
      <button onClick={()=>{dispatch(changeColor({bgclr : color}))}} >change color</button>
      <div style={{height: "400px" , width:"300px" , backgroundColor : clr} }>

      </div>
    </>
  )
}

export default App
