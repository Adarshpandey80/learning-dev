// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const myfun = (e) => {
    // alert(e.type)
    //  let h= document.getElementById("h1")
    // h.style.backgroundColor = "yellow"
    // h.style.textAlign = "center"
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  return (
    <>
      <h1 id="h1" onClick={myfun} style={{ color: "red", backgroundColor: "", cursor: "pointer" }}>hello react</h1>
      {
         arr.map((e)=>(
          <h1>{e}</h1>
         ))
      }
        
      
    </>
  )
}

export default App
