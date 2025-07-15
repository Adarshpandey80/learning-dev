import React from 'react'
import Price from './price';

const Card = ({title,idx}) => {
    let oldPrice = ["1000", "2000", "3000", "4000"];
    let newPrice = ["800", "1500", "2500", "3500"];
    let description = [" This is a bike","This is a car","This is a cycle","This is a bus","This is a truck"];
  return (
    <>
    <div style={{height:"150px",width:"400px",border:"1px solid black"}}> 
        <h1>Card Component </h1>
        <h1>title:{title}</h1>
        <h2>Description:{description[idx]}</h2>
        <Price oldprice={oldPrice[idx]} newprice={newPrice[idx]}/>
    </div>
    
    </>
  )
}

export default Card