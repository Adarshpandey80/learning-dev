import React from 'react'
import { useState } from 'react'
const Insert = () => {
    const [data , setdata] = useState({
        id : "",
        name : "",
        location : "",
        sub : "",
        rollno : ""
    })
    const handlechange = (e)=>{
        const {name ,value} = e.target;
        setdata((prev)=>({
            ...prev,[name]:value
        }))
    }
  return (
   <>
    <h1>This is Insert Component</h1>
    <h2>form for insert data</h2>
    <form action="">
        student id : <input type="text" name='id' value={data.id} onChange={handlechange}  /> <br />
        Student name : <input type="text" name='name' value={data.name} onChange={handlechange}  /> <br />
        Student location : <input type="text" name='loction' value={data.location} onChange={handlechange} /> <br />
        student inrollSub : <input type="text" name='sub' value={data.sub} onChange={handlechange} /> <br />
        student rollno : <input type="text" name='rollno' value={data.rollno} onChange={handlechange}  /> <br />
        <button>Save!!</button>
    </form>
   </>
  )
}

export default Insert