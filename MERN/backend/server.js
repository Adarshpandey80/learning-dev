const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const stuRoutes= require('./routes/stuRoutes');
const mongoose = require("mongoose")
require("dotenv").config();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/student" , stuRoutes);

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("database connection successfully")
}).catch((err)=>{
     console.log("data base connection error" , err);
})
   


const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})