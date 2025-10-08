const express = require('express');
const app = express();

app.get("/" ,(req,res)=>{
    res.send("<h1>this is default route page</h1>")
})

app.get("/employee/home" ,(req,res)=>{
    res.send("<h1>this is home page</h1>")
})
app.get("/employee/about" ,(req,res)=>{
    res.send("<h1>this is about page</h1>")
})
app.get("/employee/salery" ,(req,res)=>{
    res.send("<h1>this is salery page</h1>")
})
app.get("/employee/contect" ,(req,res)=>{
    res.send("<h1>this is contect page</h1>")
})







app.listen(8000,()=>{
    console.log("app is listing on port 8000")
})