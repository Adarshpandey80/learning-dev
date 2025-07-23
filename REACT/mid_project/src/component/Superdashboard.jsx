import axios from 'axios';
import React from 'react'
import {useState , useEffect} from 'react'
import '../mycss/style.css'


const Superdashboard = () => {
    let API_URL = 'http://localhost:3001/user'
  let [initialdata , updatadata] = useState([]);
  useEffect(()=>{
    const fetchdata = async()=>{
        try {
            let response = await axios.get(API_URL)
            updatadata(response.data)
        } catch (error) {
            console.log("data not found")
        }
    }
    fetchdata();
  },[])
  console.log(initialdata)
  return (
   <>
  <h1>Admin dashboard</h1>
   <table>
    <tr>
        <th>name</th>
        <th>email</th>
        <th>password</th>
        <th colSpan={2}>action</th>
    </tr>
    {
        initialdata.map((data)=>(
            <tr>
                <td>{data.namekey}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td><button>delete</button></td>
                <td><button>update</button></td>


            </tr>
        ))
    }
   </table>
   </>
  )
}

export default Superdashboard