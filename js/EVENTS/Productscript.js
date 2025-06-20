import product from "./product.js";

console.log(product);
let prod = document.getElementById("prod")
console.log(prod);

function renderProducts() {
    prod.innerHTML = product.map((item) => {
        return `
         <div  style=" height: 300px; width: 300px; border: 2px solid black; ">
                <h3>ID:${item.id} </h3>
                <img src="${item.Image}" alt="" height="100px">
                <h2>Price:${item.Price}</h2>
                <button onclick="addproduct(${item.Price})">Add </button>
                 <button onclick="discardproduct(${item.Price})">Sub</button>
            </div>
        `
    }).join('');
}

renderProducts();

let r=0;
window.addproduct = (price) => {
    r = r+price;
    alert(r)
}
window.discardproduct = (price) => {
    r = r -price;
      alert(r)
}

window.addlist = ()=>{
    let user_id = parseInt(document.getElementById("id").value);
    let user_img = document.getElementById("img").value;
    let price = parseInt(document.getElementById("price").value);



    let listobj = {
      id: user_id,
      Image : user_img,
      Price: price,
    }

    product.push(listobj);
    renderProducts();

    
    document.getElementById("id").value = '';
    document.getElementById("img").value = '';
    document.getElementById("price").value = '';
}
