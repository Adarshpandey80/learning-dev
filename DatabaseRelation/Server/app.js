const express = require("express")
const app = express();
const mongoose = require("mongoose")
const cors= require("cors");
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


mongoose.connect('mongodb://127.0.0.1:27017/databaserelation').then(()=>{
    console.log("mongoose connect successfully")
})






app.listen(8000 , ()=>{
    console.log("server connecion sucessfully");
})