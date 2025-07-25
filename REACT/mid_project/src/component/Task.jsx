import React from 'react'
import {useState} from 'react'
import '../mycss/style.css'
import axios from 'axios'; // Make sure to install axios using npm or yarn
const Task = () => {
    const API = 'http://localhost:3002/products'; // Replace with your API endpoint
    const [data,newdata] = useState([]);
    const fetchdata = async()=>{
        try {
            const response = await axios.get(API);
            // const result = await response.json();
           newdata(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchdata();
  return (
    <>
    <h1>Fetch fake API</h1>
    
      
        <div className='product'>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id} className='product-item'>
                            <h2>{item.title.substr(0,20)}</h2>
                            <img src={item.image} alt={item.title} height={"100px"}  />
                            <p>Price: ${item.price}</p>
                            <p>{item.description.substr(0,200)}</p>
                        </div>
                    )
                })
            }
        </div>
    
    </>
  )
}

export default Task