import Nav from './Mycomponent/Nav'
import Footer from './Mycomponent/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Mycomponent/Nav'
import Footersection from './Mycomponent/Footer'
import Services from './Mycomponent/Services'
import Home from './Mycomponent/Home'
import Carrior from './Mycomponent/Carrior'
import Signup from './Mycomponent/Signup'
import Login from './Mycomponent/Login'

import React from 'react'
function App() {
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/carrior" element={<Carrior/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footersection />
      </Router>
    

    </>
  )
}

export default App
