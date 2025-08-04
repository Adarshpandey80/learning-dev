import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'; 

const Nav = () => {
  return (
   <nav className='nav'>
    <ul>
        <li><Link to={"/Child1"}>child1</Link></li>
        <li><Link to={"/Child2"}>Child2</Link></li>
        <li><Link to={"/Child3"}>Child3</Link></li>
    </ul>
   </nav>
  )
} 


export default Nav