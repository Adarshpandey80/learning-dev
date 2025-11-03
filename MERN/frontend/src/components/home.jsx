import React from 'react'
import axios from 'axios'
const Home = () => {
 
  const handlsubmit = async()=>{
 
    try {
       const api =  `${import.meta.env.VITE_API_URL}/home`;
    const response = await axios.get(api);
    console.log(response);
    } catch (error) {
      alert(error.response.data);
    }
  }
  const handlsubmit1 = async()=>{
  
    try {
        const api =  `${import.meta.env.VITE_API_URL}/service`;
    const response = await axios.get(api);
    console.log(response);
    } catch (error) {
      alert(error.response.data);
    }
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
