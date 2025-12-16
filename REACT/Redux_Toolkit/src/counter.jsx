import React from 'react'

import {useSelector , useDispatch} from "react-redux"
import { increment, decrement } from './counterSlice'

function counter() {
    const cnt = useSelector(state=>state.counter.count);
    const dispatch = useDispatch();
  return (
    <>
     <h1>welcome</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button> <br />
    { cnt} <br />
   <button onClick={()=>{dispatch(decrement())}}>decremnet</button>
    </>
  )
}

export default counter