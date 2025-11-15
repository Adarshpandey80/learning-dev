import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Insert = () => {

  const [data , setData] = useState({});
  const handleInput =(e)=>{
    const {name , value} = e.target;
      setData((prev)=>({
        ...prev , [name]:value 
      }))
  }

const handleSubmit = async ()=>{
    const api = "http://localhost:8000/author/insertData";
    const response  = await axios.post(api , data);
    alert("insert data")

}


  return (
   <>
   
 <h1> Insert Book Data</h1>
      Enter Author Name : <input type="text" name="name" onChange={handleInput} />
      <br />
      Enter Author Address : <input type="text" name="address" onChange={handleInput} />
      <br />
      Enter Book Title : <input type="text" name="booktitle" onChange={handleInput} />
      <br />
       Enter Book Price : <input type="text" name="price" onChange={handleInput} />
      <br />

      <button onClick={handleSubmit}>Save!!!</button>
    </>
 
  )
}

export default Insert