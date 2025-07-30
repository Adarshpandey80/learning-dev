import React, { useEffect } from 'react'
import {useState} from 'react'
import '../mycss/style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Page2 = () => {
  const navigate=useNavigate();
  const API_URL = "http://localhost:3001/user"

   const [userdata , updateuserdata] = useState([])
   const validate = async () => {
    let response = await axios.get(API_URL)
    updateuserdata(response.data);
   }
   useEffect(()=>{
    validate();
   },[])
  console.log(userdata)

    const[formdata,updateformdata] = useState({
        namekey:"",
        email:"",
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
          // Check if email already exists
          if(userdata.find((e)=> e.email == formdata.email)){
            alert("Email already exists");
            navigate('/page2');
          }
          await axios.post(API_URL,formdata);
        //  navigate('/dashboard',{state:formdata});

        }
        catch (error) {
          console.log(error)
        }
    }

  return (
   <>
   <h1>This is form page</h1>
   <form action="" onSubmit={signupdate} className='form'>
    <input type="text" name='namekey' value={formdata.namekey} onChange={handlchange} /> 
    <br />
    <input type="text" name='email' value={formdata.email} onChange={handlchange} />
    <br />
    <input type="text" name='password' value={formdata.password} onChange ={handlchange} />
    <br />
    <button>submit</button>
   </form>
   
   </>
  )
}



export default Page2