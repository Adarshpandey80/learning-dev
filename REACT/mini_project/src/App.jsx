
import React from 'react';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Servecies from './Servecies';
import Gallery from './Gallery';
import Contect from './Contect';
import Card from './Card';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App({title }) {
     let arr = [1, 2, 3, 4, 5];
    let img = ["bikesimages /car1.jpg","bikesimages /car2.jpg","bikesimages /car3.jpg","bikesimages /car4.jpg","bikesimages /cycle1.jpg"];

  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home name="adarsh"/>}></Route>
          <Route path="/about" element={<About data={img}/>}></Route>
          <Route path="/services" element={<Servecies/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contect" element={<Contect/>}></Route>
        </Routes>
      </Router>
      <Card title= "product1"  idx={0}/>
      <Card title= "product2"  idx={1}/>
      <Card title= "product3"  idx={2}/>
      <Card title= "product4" idx={3}/>
    </>
  )
}

export default App
