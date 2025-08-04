import React from 'react'
import Child3 from './Child3'
import { useContext } from 'react'
import { myprovider } from '../App'

const Child2 = (props) => {

  const name = useContext(myprovider)
  return (
   <>
    <h1>child two</h1>
    {
      name.map((e) => (
        <div key={e.id}>
          <h1>{e.title}</h1>
          <h2>{e.price}</h2>
          
        </div>
      ))
    }
   
    <Child3 />
   </>
  )
}

export default Child2