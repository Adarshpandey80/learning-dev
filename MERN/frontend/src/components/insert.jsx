import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [studata, setstudata] = useState({
        id: "",
        name: "",
        location: "",
        sub: "",
        rollno: ""
    })
    const handlechange = (e) => {
        const { name, value } = e.target;
        setstudata((prev) => ({
            ...prev, [name]: value
        }))
    }
      

    const handlesubmit = async (e) => {
        e.preventDefault();
        const api = "http://localhost:8000/student/home"
        const response = await axios.post(api, studata)
        console.log(response.data)
       console.log(studata)
    }


    return (
        <>
            <h1>This is Insert Component</h1>
            <h2>form for insert data</h2>
            <form action="">
                student id : <input type="text" name='id' value={studata.id} onChange={handlechange} /> <br />
                Student name : <input type="text" name='name' value={studata.name} onChange={handlechange} /> <br />
                Student location : <input type="text" name='location' value={studata.location} onChange={handlechange} /> <br />
                student inrollSub : <input type="text" name='sub' value={studata.sub} onChange={handlechange} /> <br />
                student rollno : <input type="text" name='rollno' value={studata.rollno} onChange={handlechange} /> <br />
                <button onClick={handlesubmit}>Save!!</button>
            </form>
        </>
    )
}

export default Insert