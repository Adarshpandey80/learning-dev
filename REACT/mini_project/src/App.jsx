
import React from 'react';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Servecies from './Servecies';
import Gallery from './Gallery';
import Contect from './Contect';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Servecies/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contect" element={<Contect/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
