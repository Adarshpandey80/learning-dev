const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/home" ,(req,res)=>{
    res.send("Hello from backend");
})

app.post("/about", (req,res)=>{
    const {name , age} = req.body;
    console.log(name);
    console.log(age);
    res.send("This is about page");
})


app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})