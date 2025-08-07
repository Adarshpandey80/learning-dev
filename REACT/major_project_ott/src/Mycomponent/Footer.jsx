import React from 'react'

const Footer = () => {
  return (
   <>
 <footer className="bg-blue-950 text-white">
  <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      {/* Brand / Logo */}
      <div>
        <h2 className="text-2xl font-bold">ElectroMart</h2>
        <p className="text-sm text-white/80 mt-2">
          Your trusted source for electronics and tech services.
        </p>
      </div>
      {/* Navigation Links */}
      <div className="space-y-2">
        <h3 className="font-semibold text-white mb-1">Quick Links</h3>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#service" className="hover:underline">
              Service
            </a>
          </li>
          <li>
            <a href="#career" className="hover:underline">
              Career
            </a>
          </li>
        </ul>
      </div>
      {/* Contact Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-white mb-1">Contact</h3>
        <p className="text-sm">Email: support@electromart.com</p>
        <p className="text-sm">Phone: +1 800 123 4567</p>
      </div>
    </div>
    {/* Divider */}
    <div className="border-t border-white/20 my-6" />
    {/* Bottom Text */}
    <div className="text-center text-xs text-white/70">
      © 2025 ElectroMart. All rights reserved.
    </div>
  </div>
</footer>

   </>
  )
}

export default Footer