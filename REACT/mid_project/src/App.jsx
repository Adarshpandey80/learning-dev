import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './component/Page1.jsx'
import Page2 from './component/Page2.jsx'

function App() {
  // const [initial, updateInitial] = useState(0)


  return (
    <>
    {/* <h1>value:{initial}</h1> */}
    {/* <input type="text" onChange={()=>updateInitial(initial+1)} /> */}
    <Page2/>
      <Page1 />
    </>
  )
}

export default App
