import React from 'react'
import { useState } from 'react'
import '../mycss/style.css'

const Page1 = () => {
  const [name,userName] = useState()
  const [email,userEmail]= useState()
  const [mobile,userMobile] = useState()
  const [ password,userPassword] = useState()
  return (
    <>
    <h1>This is page one</h1>
   <form action="">
    <fieldset>
      <legend>myform</legend>
      <input type="text" placeholder='Name' onChange={(e)=>userName(e.target.value)} /> <br />
      <input type="text" placeholder='Email' onChange={(e)=>userEmail(e.target.value)} /> <br />
      <input type="text" placeholder='Mobile' onChange={(e)=>userMobile(e.target.value)} /> <br />
      <input type="text" placeholder='Password'onChange={(e)=>userPassword(e.target.value)} /> <br />
      <button>Submit</button>
      <h1>your name:{name}</h1>
      <h1> Email:{email}</h1>
      <h1> Mobile:{mobile}</h1>
      <h1> Password:{password}</h1>
    </fieldset>
   </form>
    </>
  )
}

export default Page1