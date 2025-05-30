// const { useLayoutEffect } = require("react");

// let head = document.getElementById('head1'); 
// console.log(head);
// head.textContent= " hello js ";
// head.style.color= "lightblue";
// head.style.backgroundColor = "blue"
// head.style.padding = "20px"

// let head2 = document.getElementById('head2'); 
// head2.innerHTML = "<i> tea break </i>"

// let list = document.getElementsByTagName("li")
// console.log(list)
// list[2].textContent = "by array"
// list[3].textContent = "adarsh"

// create ul list 10 list itom add even baground color blue and text color white

// let ul = document.getElementsByTagName("li");
// console.log(ul);
// for(let i =0 ;i<10;i++){
//     if(i%2!=0){
//         ul[i].style.backgroundColor = "blue"
//         ul[i].style.color = "white"
//     }
// }

// ===========================30/05/25====================

let image = document.getElementById("image");
image.src = "car2 copy.jpg"

let head = document.getElementById("h1")
head.setAttribute("align" , "center")  // use to apply the attributes

let bd = document.body
bd.removeAttribute("bgcolor")  // use to  remove the attributes