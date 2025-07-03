

let basurl = "http://localhost:3000/products";

const getallproduct = async()=>{
    try {
        let res =await fetch(basurl);
        let data = await res.json();
        console.log(data)
        let productDiv = document.getElementById("products");
        productDiv.innerHTML=data.map((e)=>{
            return `
              <h1>id:${e.id}</h1>
              <h1>title:${e.title}</h1>
              <h1>price:${e.price}</h1>
            `
        }).join('');
    } catch (e) {
        alert(e)
    }
}
// add product 
const addproduct = async()=>{

    let title = document.getElementById("title").value ;
    let price = document.getElementById("price").value 

    try {
        await fetch(basurl , {
           method :"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({title:title , price:price})
        });
        getallproduct();
    } catch (error) {
         console.log(error);
    }
}

//update 

const updateproduct = async()=>{
    let id = document.getElementById("id").value
    let title = document.getElementById("utitle").value ;
    let price = document.getElementById("uprice").value 

    try {
        await fetch( `${basurl}/${id}` , {
           method :"PUT",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({title:title , price:price})
        });
       alert("updated")
       
        getallproduct();
       
    } catch (error) {
         console.log(error);
    }
}
