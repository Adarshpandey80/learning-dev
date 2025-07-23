import React from 'react'
import { useLocation } from 'react-router-dom'


const Dasboard = () => {
  const location = useLocation();
  const formdata = location.state || {}; // get the data from the previous page
  return (
    <>
    <h1>Welcome to the Dashboard</h1>
    <h2>Neme : {formdata.name}</h2>
    <h2>Email : {formdata.email}</h2>
    <h2>Password : {formdata.password}</h2>
    <div>
        
    </div>
    </>
  )
}

export default Dasboard