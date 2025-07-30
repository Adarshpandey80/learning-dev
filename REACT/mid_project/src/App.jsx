import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './component/Page1.jsx'
import Page2 from './component/Page2.jsx'
import Nav from './component/Nav.jsx'
import Dasboard from './component/Dasboard.jsx'
import Superdashboard from './component/Superdashboard.jsx'
import Task from './component/Task.jsx'
import Task2 from './component/Task2.jsx'



function App() {
  // const [initial, updateInitial] = useState(0)


  return (
    <>
    {/* <h1>value:{initial}</h1> */}
    {/* <input type="text" onChange={()=>updateInitial(initial+1)} /> */}
      
    <Router>
      <Nav />
      <Routes>
       
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/super" element={<Superdashboard />} />
        <Route path="/task" element={<Task />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </Router>
   
    {/* <Page1 /> */}
     
    </>
  )
}

export default App
