import { useState , useEffect , createContext  } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Child2 from './component/Child2';
import Child3 from './component/Child3';
import Child1 from './component/Child1';
const myprovider = createContext();


function App() {
  const API_URL = "http://localhost:3002/products";
   const [name , setname] = useState([])
  const [mobile , setmobile] = useState("123456")
  const fetchdata =  async()=>{
    let res = await axios.get(API_URL);
    setname(res.data);
  }
  useEffect(()=>{
    fetchdata();
  },[])
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

//   const [time , setTime] = useState(0);
//   let timeref = useRef(null);
//  const startwatch =()=>{
//   timeref.current = setInterval(() => {
//       setTime((time) => time + 1);
//     }, 1000);
//  }
//  const storpwatch = () => {
//   clearInterval(timeref.current);
//  }
//   const clearintervel = () => {
//   setTime(0);
//   }
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
    {/* <div>
      <h1>Stop Watch</h1>
      <h2>{time}</h2>
      <button onClick={startwatch}>Start</button>
      <button onClick={storpwatch}>stop</button>
      <button  onClick={clearintervel}>Reset</button>
    </div> */}
    <Router>
      <Nav />
      <Routes>
      <Route path="/Child1" element={<Child1 />} />
      <Route path="/Child2" element={<Child2  />} />
      <Route path="/Child3" element={<Child3  />} />
      </Routes>
    </Router>


    <myprovider.Provider value={name}>
      <Child1 />
    </myprovider.Provider>
    </>
  )
}

export default App;
export { myprovider};