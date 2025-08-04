import React from 'react'
import { useContext } from 'react'
import { myprovider } from '../App'
import '../index.css'


const Child3 = () => {
    // const {mobile , setmobile} = useContext(myprovider)
  const name = useContext(myprovider)
    
  return (
  <>
    <h1>child three</h1>
     <div className='child3'>
    {
      name.map((e)=>(
        <div key={e.id} className='product'>
          <h1>{e.title}</h1>
          <h2>{e.price}</h2>
          <img src={e.image} alt={e.title} height={"200px"}  />
          <p>{e.description}</p>
          <h2>{e.model}</h2>
        </div>
      ))
    }
    </div>
   
  </>
  )
}

export default Child3