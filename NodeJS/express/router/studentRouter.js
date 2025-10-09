const express = require("express")

const route = express.Router();
const stucontroll = require("../controller/stuController")


route.get("/home", stucontroll.homePage)


route.get("/about",(req,res)=>{
    res.send("<h1> this is about page</h1>")
})
route.get("/course",(req,res)=>{
    res.send("<h1> this is course page</h1>")
})
route.get("/contact",(req,res)=>{
    res.send("<h1> this is contact page</h1>")
})









module.exports = route