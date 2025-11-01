import React from 'react'
import axios from 'axios'
const Home = () => {
 
  const handlsubmit = async()=>{
    const api =  `${import.meta.env.VITE_API_URL}/home`;
    const response = await axios.get(api);
    console.log(response);
  }
  const handlsubmit1 = async()=>{
    const api =  `${import.meta.env.VITE_API_URL}/service`;
    const response = await axios.get(api);
    console.log(response);
  }




  return (
  <>
    <h1>This is Home Component</h1>
    <button onClick={handlsubmit}>home</button>
    <button onClick={handlsubmit1}>service</button>
   
  </>
  )
}

export default Home
