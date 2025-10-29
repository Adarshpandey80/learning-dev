import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/home'
import Display from './components/Display'
import Layout from './Layout'
import Search from './components/Search'
import Update from './components/Update'
import Insert from './components/insert'

function App() {


  return (
    <>
      <Router>
          <Layout/>
        <Routes>
          <Route path="/" element={<Layout/>} />
          <Route index element={<Home/>} />
          <Route path="/display" element={<Display/>} />
          <Route path="/insert" element={<Insert/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>

      </Router>
    </>
  )
}

export default App
