 import React from 'react'
 
 const Home = (props) => {
   return (
     <div>
        <h1>this is home page</h1>
        <img src="bikesimages /car1.jpg" alt="" height={"200px"} width={"200px"} />
       <h1>{props.name}</h1>
        <p>{props.email}</p>
     </div>
   )
 }
 
 export default Home