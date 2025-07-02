

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
              <h1>id:${e.title}</h1>
              <h1>id:${e.price}</h1>
            `
        })
    } catch (e) {
        alert(e)
    }
}

const addproduct = async()=>{
    let title = document.getElementById("title").value ;
    let price = document.getElementById("price").value 

    try {
        await fetch(basurl , {
           method :"POST",
           headers:{
            "Content -Type":"application/json"
           },
           body:json.stringify({title:title , price:price})
        })
    } catch (error) {
         console.log(e)
    }
}
