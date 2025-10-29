import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
const Update = () => {
  const [upData , setUpdata]= useState({
       id: "",
        name: "",
        location: "",
        sub: "",
        rollno: ""
  })
  
  useEffect(()=>{
    fatchdata();
  },[])


   const fatchdata =  async()=>{
        const api = `http://localhost:8000/student/${id}`
        const response = await axios.get(api)
        console.log(response.data)
   }


  return (
    <>
        <h1>This is Update Component</h1>
        <form action="">
                student id : <input type="text" name='id'   /> <br />
                Student name : <input type="text" name='name'  /> <br />
                Student location : <input type="text" name='location'   /> <br />
                student inrollSub : <input type="text" name='sub' /> <br />
                student rollno : <input type="text" name='rollno' /> <br />
                <button >Save!!</button>
            </form>
    </>
  )
}

export default Update