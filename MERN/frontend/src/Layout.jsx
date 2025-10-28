import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Layout = () => {
  return (
    <>
        <Link to="/">Home</Link> |
        <Link to="/display">display</Link> |
        <Link to="/insert">insert</Link> |
        <Link to="/update">update</Link> |
        <Link to="/search">search</Link> |
        <hr />  
        <Outlet />
        
    </>
  )
}

export default Layout