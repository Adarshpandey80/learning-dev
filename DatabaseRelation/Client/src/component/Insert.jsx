import React from 'react'

const Insert = () => {
  return (
   <>
   
   <h1> Insert Data</h1>
      Enter Username : <input type="text" name="username" onChange={handleInput} />
      <br />
      Enter Email : <input type="text" name="email" onChange={handleInput} />
      <br />
      Enter First Name : <input type="text" name="fname" onChange={handleInput} />
      <br />
      Enter First Lastname : <input type="text" name="lname" onChange={handleInput} />
      <br />

      <button >Save!!!</button>
    </>
 
  )
}

export default Insert