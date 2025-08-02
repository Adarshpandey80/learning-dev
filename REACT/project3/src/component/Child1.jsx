import React from 'react'
import Child2 from './Child2'


const Child1 = (props) => {
  return (
   <>
   <h1>child one</h1>
   <h1>name:{props.val1}</h1>
   <Child2 val1={props.val1}/>
   </>
  )
}

export default Child1