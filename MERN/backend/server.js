const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const stuRoutes= require('./routes/stuRoutes');
const mongoose = require("mongoose")


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/student" , stuRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/collStudent').then(()=>{
    console.log("database connection successfully")
}).catch((err)=>{
     console.log("data base connection error" , err);
})
   



app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})