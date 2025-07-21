import React from 'react'
import '../mycss/style.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <>
    <nav className="navbar">
      <ul>
     
        <li><Link to={"/Page1"}>Page1</Link></li>
        <li><Link to={"/page2"}>Form</Link></li>
        <li><Link to={"/dashboard"}>Dashboard</Link></li>
      </ul>
    </nav>
  </>
  )
}

export default Nav