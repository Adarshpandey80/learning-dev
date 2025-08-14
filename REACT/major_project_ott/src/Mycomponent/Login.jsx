import React from 'react'
import { Link  } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/user";
 
  const [UserLogin,setuserLogin] = useState({
    email:"",
    password:"",
  })

  const handleChange =(e)=>{
   const {name,value} = e.target;
   setuserLogin((prev)=>({
    ...prev, [name]: value

   }))

  }

  const userlogin =async (e)=>{
    e.preventDefault();
    
    try {
       const res = await axios.get(API_URL ,{
        params: {
          email: UserLogin.email,
          password: UserLogin.password
        }
       });
       if(res.data && res.data.length === 1){
        
        toast.success("Login Successful", {
          position: "top-center",
          theme: "dark"
        });
        navigate("/dashboard", {state: res}); // Navigate to dashboard with user data
       }
        else{
          toast.warning("Invalid Credentials", {
            position: "top-center",
            theme: "dark"
          });
        }
      
    } catch (error) {
  
      console.log(error)
    }
  
  }

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              name="email"
              value={UserLogin.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              name="password"
              value={UserLogin.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>

            <div className="text-sm">
              <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit" onClick={userlogin}
            className="w-full flex justify-center py-2 px-4 border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm font-medium"
          >
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
   </>
  )
}

export default Login