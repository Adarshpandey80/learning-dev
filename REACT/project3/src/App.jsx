import { useState , useEffect   } from 'react';
import { useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [initalstate, setfinalInital] = useState(0);
  //   let Val = useRef(0);
  //   let clr = useRef(null);
  //   let heading = useRef(null);
  //   const increment = () => {
  //       Val.current = Val.current + 1;
  //       setfinalInital(initalstate +1);
  //       console.log(Val)
  //   }
  //   useEffect(() => {
  //       console.log("useEffect called");
  //   });

  //   const colorchange = () => {
  //     clr.current.style.backgroundColor = "red";
  //     heading.current.style =  "color:blue; font-size:100px; text-align:center";
  //   }



  // stop watch programming 

  const [time , setTime] = useState(0);
  let timeref = useRef(null);
 const startwatch =()=>{
  timeref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
 }
 const storpwatch = () => {
  clearInterval(timeref.current);
 }
  const clearintervel = () => {
  setTime(0);
  }
  return (
    // <>
    // <div>
    //   <h1>project3</h1>
    // <h1>{initalstate}</h1>
    // <h1>value={Val.current}</h1>
    // <button onClick={increment}>click</button>
    // <button ref={clr}>color change hona hai</button>
    // <button onMouseOver={colorchange}> colorchange</button>
    // <h1 ref={heading}>this is heading</h1>
    // </div>
    // </>

    <>
    <div>
      <h1>Stop Watch</h1>
      <h2>{time}</h2>
      <button onClick={startwatch}>Start</button>
      <button onClick={storpwatch}>stop</button>
      <button  onClick={clearintervel}>Reset</button>
    </div>
    </>
  )
}

export default App
