import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
const Search = () => {
  const [query , setQuery] = useState("")
  const [searchdata , setSearchdata] = useState({});
  const handlchange = (e)=>{
    setQuery(e.target.value);
  }
 

  useEffect(()=>{
 
  },[])

   const searchData = async()=>{
     const api = "http://localhost:8000/student/searchdata";
      const response = await axios.post(api , {id:query});
      console.log(response.data)
      setSearchdata(response.data);
   }
   

  return (
    <>
        <h1>This is Search Component</h1>
        search data : <input type="text"  value={query} onChange={handlchange}/>
        <button onClick={searchData}>search</button>
        <h2>Search Result :</h2>
        <h1>id : {searchdata.id}</h1>
        <h1>name : {searchdata.name}</h1>
        <h1>location : {searchdata.location}</h1>
        <h1>subject : {searchdata.inrollsub}</h1>
        <h1>rollNo : {searchdata.sturoll}</h1>
    </>
  )
}

export default Search