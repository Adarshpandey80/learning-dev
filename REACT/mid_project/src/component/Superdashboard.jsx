import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import '../mycss/style.css'


const Superdashboard = () => {
    let API_URL = 'http://localhost:3001/user'
    let [initialdata, updatadata] = useState([]);
       const [updatedata, newupdatedata] = useState([])
    const fetchdata = async () => {
        try {
            let response = await axios.get(API_URL)
            updatadata(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        fetchdata();
    }, [])
    //   console.log(initialdata)

    //delete function 
    const userDelete = async (id) => {
        let cnf = window.confirm("Are you sure you want to delete this user?");
        if (!cnf) return;
        try {
            await axios.delete(`${API_URL}/${id}`)
            fetchdata(); // Refresh the data after deletion
        } catch (error) {
            console.log(error)
        }
    }

    //update  function 
    const userUpdate = async (data) => {
        console.log(data)
        
    }

    
  const handlechange=async(e)=>{
  await  newupdatedata(e.target.value)
     
  }
  console.log(updatadata)



    return (
        <>
            <h1>Admin dashboard</h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th colSpan={2}>action</th>
                </tr>
                {
                    initialdata.map((data) => (
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.namekey}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td><button onClick={() => userDelete(data.id)}>delete</button></td>
                            <td><button onClick={() => userUpdate(data)}>update</button></td>


                        </tr>
                    ))
                }
            </table>
            <div className='updataForm'>
                <form action="">
                    name : <input type="text" name='updateName' value={updatadata} onChange={handlechange} />
                </form>
            </div>

        </>
    )
}

export default Superdashboard