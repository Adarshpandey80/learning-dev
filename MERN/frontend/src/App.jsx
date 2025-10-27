import { useState } from 'react'

import axios from 'axios'

function App() {
 const handlachange = async ()=>{
  const api = "http://localhost:8000/home";
  const response = await  axios.get(api);
  console.log(response.data);
 }

 const handlchange1  = async ()=>{
  const api = "http://localhost:8000/about";
  const response = await axios.post(api , {name: "adarsh" , age: 22});
  console.log(response.data);
 }

  return (
    <>
      <h1>main component</h1>
      <button onClick={handlachange}>Click!!</button>
      <button onClick={handlchange1}>about!!</button>
    </>
  )
}

export default App
