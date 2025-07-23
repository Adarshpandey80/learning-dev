import React from 'react'
import {useState} from 'react'
import '../mycss/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Page2 = () => {
  const navigate=useNavigate();
  const API_URL = "http://localhost:3001/user"
    const[formdata,updateformdata] = useState({
        namekey:"",
        email:"@gmail.com",
        password:""
    })

    const handlchange=(e)=>{
        const {name,value} = e.target;
       updateformdata((prev)=>({
        ...prev,
        [name]:value
       }))
       
    }
    const signupdate=async(e)=>{
        e.preventDefault();
        try { 
          await axios.post(API_URL,formdata);
         navigate('/dashboard',{state:formdata});

        }
        catch (error) {
          console.log(error)
        }
    }

  return (
   <>
   <h1>This is form page</h1>
   <form action="" onSubmit={signupdate}>
    <input type="text" name='namekey' value={formdata.namekey} onChange={handlchange} /> 
    <br />
    <input type="text" name='email' value={formdata.email} onChange={handlchange} />
    <br />
    <input type="text" name='password' value={formdata.password} onChange ={handlchange} />
    <br />
    <button>submit</button>
   </form>
   <h1>your name:{formdata.namekey}</h1>
   <h1>your Email:{formdata.email}</h1>
  <h1>your Password:{formdata.password}</h1>
   </>
  )
}



export default Page2