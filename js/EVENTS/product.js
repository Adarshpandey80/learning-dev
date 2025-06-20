// let listing = {};


window.addlist = ()=>{
    let user_id = parseInt(document.getElementById("id").value);
console.log(user_id);
let user_img = document.getElementById("img").value;
console.log(user_img);
 let price = parseInt(document.getElementById("price").value);
 console.log(price)

let listobj = {
  id: user_id,
  Image : user_img,
  Price: price,
}
console.log(listobj)
product.push(listobj)
}


 


let product = [
    {
        id:1,
        Image:"/bikesimages/bike1.jpeg" ,
        Price: 100,
    },
     {
        id:2,
        Image:"/bikesimages/bike2.jpeg",
        Price: 200,
    },
]


export default product;