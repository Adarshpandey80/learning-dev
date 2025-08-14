import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Signup = () => {
  const navigate = useNavigate();
  const API_URL = "http://localhost:3000/user";
  const [userData, setUserdata] = useState({
    name:"",
    email:"",
    password:"",
    mobile:""
  })
  
  const handlchange =async(e)=>{
    const {name,value} = e.target
   setUserdata((prev)=>({
    ...prev,[name]:value
   }))

  }

    

  const signupdata =async (e)=>{
     e.preventDefault();

      try {
         let res = await axios.get(API_URL)
         let response =  res.data;
       if(response.find((e)=>e.email ==userData.email)){
         toast.info("email already exists" ,{
           position: "top-center",
           theme: "dark"
         });
         return;
       }
       
       const signupResponse = await axios.post(API_URL,userData);
       if(signupResponse.data) {
         toast.success("Signup Successful", {
           position: "top-center",
           theme: "dark"
         });
         navigate("/", {state: userData});
       }
        
      } catch (error) {
        console.log(error);
        toast.error("Signup failed", {
          position: "top-center",
          theme: "dark"
        });
      }
  }


  return (
   <>
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Full name"
              name='name'
              onChange={handlchange}
              value={userData.name}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="@example.com"
              name='email'
               onChange={handlchange}
                value={userData.email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name='password'
               onChange={handlchange}
                value={userData.password}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 text-sm text-gray-600">Mobile</label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              name='mobile'
               onChange={handlchange}
                value={userData.mobile}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={signupdata}
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">login </Link>
        </p>
      </div>
    </div>
   </>
  )
}

export default Signup