import React from 'react'

const Nav = () => {
   
  return (
   
   <>

   <nav className="bg-blue-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-white ">Electric Service</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-100 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-100 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-100 hover:text-blue-600">Carrior</a>
            <a href="#" className="text-gray-100 hover:text-blue-600">Login</a>
          </div>

          {/* Mobile Menu Toggle using <details> */}
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-10">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Home</a>
                
                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Services</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Carrior</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600">Login</a>
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