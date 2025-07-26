import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import '../mycss/style.css'


const Superdashboard = () => {
    let API_URL = 'http://localhost:3001/user'
    let [initialdata, updatadata] = useState([]);

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

    const [formdata, updateformdata] = useState({
        namekey: "",
        email: "",
        password: ""
    })

    const handlchange = (e) => {
        const { name, value } = e.target;
        updateformdata((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const [userid, setuserid] = useState(null)
    const updateuser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/${userid}`, formdata);
            setuserid(null);
            fetchdata();
        }
        catch (error) {
            console.log(error)
        }
    }




    const userUpdate = async (id) => {
        setuserid(id)
        const user = initialdata.find((u) => u.id === id)
        updatadata({
            name: user.namekey || '',
            email: user.email || '',
            password: user.password || ''
        })


    }






    return (
        <>
            {
                userid ? (
                    <>
                        <h1>This is form page</h1>
                        <form action="" onSubmit={updateuser} className='form'>
                            <input type="text" name='namekey' value={formdata.namekey} onChange={handlchange} />
                            <br />
                            <input type="text" name='email' value={formdata.email} onChange={handlchange} />
                            <br />
                            <input type="text" name='password' value={formdata.password} onChange={handlchange} />
                            <br />
                            <button>submit</button>
                        </form>
                        <h1>your name:{formdata.namekey}</h1>
                        <h1>your Email:{formdata.email}</h1>
                        <h1>your Password:{formdata.password}</h1>
                    </>
                ) : (
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
                                initialdata.map((data,i) => (
                                    <tr key={i}>
                                        <td>{data.id}</td>
                                        <td>{data.namekey}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td><button onClick={() => userDelete(data.id)}>delete</button></td>
                                        <td><button onClick={() => userUpdate(data.id)}>update</button></td>


                                    </tr>
                                ))
                            }
                        </table>

                    </>
                )
            }

        </>
    )
}

export default Superdashboard