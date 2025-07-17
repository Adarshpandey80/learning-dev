import React from 'react'
import {useState} from 'react'

const Page2 = () => {
    const[formdata,updateformdata] = useState({
        namekey:"",
        email:"@gmail.com"
    })

    const handlchange=(e)=>{
        const {name,value} = e.target;
       updateformdata((prev)=>({
        ...prev,
        [name]:value
       }))
       
    }
  return (
   <>
   <h1>This is page 2</h1>
   <form action="">
    <input type="text" name='namekey' value={formdata.namekey} onChange={handlchange} /> 
    <br />
    <input type="text" name='email' value={formdata.email} onChange={handlchange} />
   </form>
   <h1>your name:{formdata.namekey}</h1>
   <h1>your Email:{formdata.email}</h1>
   </>
  )
}

export default Page2