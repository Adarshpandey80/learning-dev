import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
const Search = () => {
  const [query , setQuery] = useState("")
  const [searchdata , setSearchdata] = useState([]);
  const handlchange = (e)=>{
    setQuery(e.target.value);
  }
 


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
        {
          searchdata.map((e)=>(
            <div key={e._id}>
              <h1>id : {e.id}</h1>
              <h1>name : {e.name}</h1>
              <h1>location : {e.location}</h1>
              <h1>subject : {e.inrollsub}</h1>
              <h1>rollNo : {e.sturoll}</h1>
            </div>
          ))
        }
        {/* <h1>id : {searchdata.id}</h1>
        <h1>name : {searchdata.name}</h1>
        <h1>location : {searchdata.location}</h1>
        <h1>subject : {searchdata.inrollsub}</h1>
        <h1>rollNo : {searchdata.sturoll}</h1> */}
    </>
  )
}

export default Search