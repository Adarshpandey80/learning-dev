import React from 'react'
import './style.css'
const About = (props) => {
    let data1 = props.data;
    let img = props.data;
   
    return (
        <>
            <div className='about'>
                <din className="about_image">
                   
                    <img src="https://images.unsplash.com/photo-1508974239320-0a029497e820?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww" alt="" />
                </din>
                <div className='about_content'>
                    <h1>About</h1>
                    <p>Discover the perfect blend of power, style, and innovation.
                         Whether you crave the adrenaline of a high-performance sports car, 
                         the elegance of a luxury sedan, or the practicality of a family SUV,
                          we have the ride that matches your dreams. Explore cutting-edge technology, unbeatable deals,
                           and vehicles engineered to elevate every journey. Your next adventure starts here—find the car that speaks to you and hit the road with confidence</p>
                </div>
            </div>
            <h1>Array Data:</h1>
           {
            img.map((e)=>{
                return (
                    <img src={e} alt="" height={"200px"} width={"200px"} key={e} style={{margin: "10px"}}/>
                )
            })
           }
            
        </>
    )
}

export default About
