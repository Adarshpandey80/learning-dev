import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

import axios from "axios"
import { Link } from 'react-router-dom';
const Display = () => {

  const [stuData, setstuData] = useState([]);
  const [loading , setloading] = useState(true)


  useEffect(() => {
      const api = `${import.meta.env.VITE_API_URL}/student/getall`;
      const response =  axios.get(api);
      response.then((res)=>{
        setstuData(res.data);
        setloading(false)
      }).catch((err)=>{
        console.log("data fetch susscesfull")
      })
      
  },[])

   const deletedata = async (id) =>{
    const api = `${import.meta.env.VITE_API_URL}/student/delete/${id}`;
    const response = await axios.delete(api);
    alert("data deleted successfully")
     setstuData(response.data);
   }
  return (
    <>
      <h1>This is Display Component</h1>
      <h2>Student Info Page</h2>
     
     {
           loading ? (
            <p>page loading ...</p>
           ) :( 
            <table bgcolor="pink" align="center" width="600" border="1px solid black">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>location</th>
                  <th>subject</th>
                  <th>rollNo</th>
                  <th>edit / delete</th>
                  
                </tr>
              </thead>
              <tbody  align="center" width="600"  >
                {
                  stuData.map((e, index)=>(
                    <tr key={index}>
                      <td>{e.id}</td>
                      <td>{e.name}</td>
                      <td>{e.location}</td>
                      <td>{e.inrollsub}</td>
                      <td>{e.sturoll}</td>
                      <td> <Link to={`/update/${e._id}`}>Edit</Link> <Link><button onClick={()=>deletedata(e._id)}>delete</button></Link></td>
                    </tr>
                  )
                  )
                }
              </tbody>
            </table>
           )
     }

    </>
  )
}

export default Display