import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
   <>
    <h1>child two</h1>
    <h1>name:{props.val1}</h1>
    <Child3 val1 = {props.val1}/>
   </>
  )
}

export default Child2