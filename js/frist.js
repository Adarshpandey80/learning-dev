// console.log("hello js ......")
// let a=20;
// let b=3;
// console.log(a+b)
 
// let r=3;
// document.write(4*3.4*r*r)

// let n1= parseInt (prompt("int num1"));
// let n2= parseInt (prompt("int num2"));
// document.write("sum of two num is " + (n1+n2))

// wap to take input from user and chack num is even of odd
// wap to take two input from user and check which is grater

// let num = parseInt(prompt("Enter a number:"));
// if (num % 2 == 0) {
//    alert("num is even")
// }else{
//     alert("num is odd")
// }

// wap to take two input from user and check which is grater
// let num1 = parseInt(prompt("Enter first num1:"));
// let num2 = parseInt(prompt("Enter second num2:"));
// if (num1 > num2) {
//     alert(num1 + " is greater than " + num2);
// }
// else   {
//     alert(num1 + " is less than " + num2);
// }

//wap to check num is positiv nigative and nutral


// let num = parseInt(prompt("enter the num"));
// if(num > 0) {
//     alert( " num is positive");
// }else if(num<0){
//     alert("num is negative")
// }else {
//     alert("num is zero")
// }

// wap to print 1 to 10 digit using do while loop
// let i = 1;

// do{
//     document.write(i);
//     i++;
// }while(i<=10)
   


// let i =1;
 
// while(i>0){
//     let num = parseInt(prompt("enter num"))

//     if(num == 0){
//         break;
//     }

//     document.write(num);
//     i++;
// }

// do{
//      var num = parseInt(prompt("enter num"))
//      if( num == 0){
//         break;
//         }

// }
// while(1>0)



//wap to print a tabel of n number 
// let i =1;
//  let n = parseInt(prompt("enter the number"))
//  while(i<=10){
//     document.write(n*i + "<br>");
//   i++;
//     }   

      //  for loop

//  for(let i=1; i<=10;i++){
//   document.write(i + "<br>");
//  }
 

//  let n = parseInt(prompt("enter the num"))
//  for(let i=1; i<=10;i++){
//   document.write(n*i + "<br>");
//  }

//   for(let i=20; i>=10;i--){
//    document.write( i + "<br>");
//  }


//  let n = parseInt(prompt("enter the num"))
//  let a = n*n;
//  for(let i=10; i>=1;i--){
//   document.write(a*i + "<br>");
//  }

 //wap to print only even num betwen 1 to 15

 
//  for(let i=1; i<=15;i++){
//   if(i%2==0){
//     document.write(i + "<br>")
//   }
  
//  }
 //wap to take one input from user and check it is even of odd if num is even then print the tabel of that num
 //if num is odd then print cube of that num

//  let num =  parseInt(prompt("enter the num"))
 
//  if(num%2==0){
//   for(let i=1; i<=10;i++){
//     document.write(num*i + "<br>")
//   } 
//  }else {
//     let cube = num*num*num;
//     document.write(cube);
    
//     }

    // nested foe loop


// for(let i=1;i<=10;i++){
//   for(let a=2; a<=3;a++)
//   {
//     document.write(i*a + " ");
//   }
// }

// for(let i=0 ; i<=5 ;i++){
//   for(let j= 0 ;j<=i ;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let i=0 ; i<=5 ;i++){
//   for(let j= 0 ;j<=5-i-1 ;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }

// for(let i=0 ; i<=5 ;i++){
//   for(let j= 5-i ;j>5 ;j++){
//     document.write(" ")
//   }for(let j= 0 ;j<=i ;j++){
//     document.write("*")
//   }
//   document.write("<br>")
// }


// for(let i=0 ;i<=5;i++){
//   for(let j=0;j<=5;j++){
//     if(i==0||j==0||i==5||j==5){
//       document.write("*")
//     }
//     else{
//       document.write("&nbsp&nbsp")
//       }
   
//   }

//    document.write("<br>")
  
// }


//                      Array..........................................


// let ar = ["adarsh", 52,"bpl"]
// for(let ver of ar){
//     console.log(ver)
// }


// let ar = []

// for(let i =0 ;i<5;i++){
//     ar[i] = parseInt(prompt("enter the data for arr" ))
    
// }


// wap to find frist digit and last digit of num 

//  let num = parseInt(prompt("inter the num"))
// let num1 = num
// while( num>=10){
//     num = num/10
// }
//     console.log(num)

// let rem = num1%10
// console.log(rem)  
// console.log(num+rem)

// let ar = []
// for(let i =0 ; i<5;i++){
//     ar[i] = parseInt(prompt("enter the data for arr"))
// }
// let sum =0;
// for(let i =0 ; i<5;i++){
//     sum = sum + ar[i]
// }
// console.log(sum)




//  push() && pop()  && 
//  unshift() "add element on 1st indexing" && shift() "delete element from frist indexing"  function ..................
// slice() "take out some elements from array "
//splice() 
// let stu = ["adarsh" ,20 , "bhopal" ,3,4,5,6,7]
// console.log(stu)
// stu.push("cyberom" , "india")
// console.log(stu)
// stu.pop()
// console.log(stu)

// stu.unshift("country" , "name" , 200)
// console.log(stu)

// stu.shift()
// console.log(stu) 

// let a = stu.slice(1,4)
// console.log(a)

// stu.splice(1,4)
// console.log(stu)

// stu.splice(1,0,"pandey")
// console.log(stu)


// 20/05/25........................ object ................/ 


// let ob = {
//     name:"adarsh",
//     age:20,
//     contact:234,
// }

// console.log(ob.name)



// let person = {
//     name:prompt("enter the name of person"),
//     age:prompt("enter the age of person"),
//     contact:prompt("enter the contect of person")
// }

// console.log(person)

// let a = prompt("enter the name of person")
// let b = parseInt(prompt("enter the age of person"))
// person.name = a    // the methos is use to override the value
// person.age = b
// console.log(person.name)
// console.log(person.age)

// nested object

// let obj = {
//     name : "adarsh",
//     age : 20,
//     contect : 23445,
//     account : {
//         acc_name : "bob",
//         acc_no: 1234
//     }
// }

// console.log(obj.name)
// console.log(obj.account.acc_name)

// let ob = {
//     name:"adarsh",
//     lastN:"pandey",
//     age:20,
//     contect:1234,
//     location:"bhopal",
//     city:"inderpuri",
//     country:"india",
// }
// console.log(Object.keys(ob)[0])

//========================= function ==========================

// ================no argument with no return==============
// function even(){   
//     let n = parseInt(prompt("enter the num"));
//     let square =  n*n;
//     console.log(square)
//     if(n%2==0){
//         console.log("num is even")
//     }else{
//         console.log("num is odd")
//     }
// }
// even();

// ================argument with  return==============

// function arrSum(arr){
   
//     let sum =0;
//   for(let i =0 ;i<=4; i++){
//     sum = sum+ arr[i];
//   }
//    return sum;
// }
// let arr1 = [2,3,4,5,5]
// console.log(arrSum(arr1))

// ================no argument with  return==============

// function lastD (){
//     let n = parseInt(prompt("enter the num"))
//     while(n>=10){
//         n = n/10
//     }
//     return n;
// }
// console.log(lastD())


// function divi( n){
//    if(n%3==0){
//     console.log("number is divisibel by 3")
//     for(let i =1;i<=10;i++){
//    console.log(n*i)
      
//     }
//    }else {
//     console.log("num is not divisibel by three")
//    }
//    return n
// }
// console.log(divi(6))


let a = parseInt(prompt("enter a number"))
document.write(a);