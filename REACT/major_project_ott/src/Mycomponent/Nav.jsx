import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
   
  return (
   
   <>

     
     <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-black">
              Electric Service
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-black hover:text-blue-600">Home</Link>
            <Link to="/services" className="text-black hover:text-blue-600">Services</Link>
            <Link to="/carrior" className="text-black hover:text-blue-600">Carrior</Link>
            <Link to="/login" className="text-black hover:text-blue-600">Login</Link>
          </div>

          {/* Right: Mobile Menu Toggle */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-10">
                <Link to="/" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/services" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Services</Link>
                <Link to="/carrior" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Carrior</Link>
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Login</Link>
              </div>
            </details>
          </div>
        </div>
      </div>
    </nav>
   </>
  )
}

export default Nav