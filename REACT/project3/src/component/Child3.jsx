import React from 'react'
import { useContext } from 'react'
import { myprovider } from '../App'

const Child3 = () => {
    const {mobile , setmobile} = useContext(myprovider)
    const changemobile =()=>{
        setmobile(12121212)
    }
  return (
  <>
    <h1>child three</h1>
  
    <h1>your mobile :{mobile}</h1>
    <button onClick={changemobile}>chnage</button>
  </>
  )
}

export default Child3