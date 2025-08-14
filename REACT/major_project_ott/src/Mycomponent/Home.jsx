import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation( '/Login.jsx' );
  const formdata = location.state || {};
  console.log("Form data from location state:", formdata);

  return (
    <>
    <div>
      <h1>name : {formdata.name}</h1>
      <h1>Email : {formdata.email}</h1>
      <h1>Password : {formdata.password}</h1>
         


    </div>
        <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,0,0.2),transparent)]"></div>

        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Power Up Your Connections ⚡
        </h1>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-300">
          Find trusted electricians or register your shop to reach more customers.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 shadow-lg">
            Find Electricians
          </button>
          <button className="bg-transparent border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105">
            Register Your Shop
          </button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "Search", icon: "🔍" },
            { step: "View Shop Details", icon: "📋" },
            { step: "Contact", icon: "📞" },
            { step: "Book", icon: "🛠️" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] rounded-xl p-6 text-center shadow-lg hover:shadow-yellow-400/40 transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Shops */}
      <section className="py-20 bg-[#111827]">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Featured Shops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((shop) => (
            <div
              key={shop}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition-shadow"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Shop+${shop}`}
                alt={`Shop ${shop}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Electric Shop {shop}</h3>
                <p className="text-sm text-gray-400">Location, Ratings</p>
                <button className="mt-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-300 font-semibold transition-transform transform hover:scale-105">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { reason: "Verified Shops", icon: "✅" },
            { reason: "Easy Contact", icon: "📱" },
            { reason: "Top Ratings", icon: "⭐" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1e293b] p-6 rounded-xl text-center shadow-lg hover:shadow-yellow-400/40 transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold">{item.reason}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
    </>
  )
}

export default Home