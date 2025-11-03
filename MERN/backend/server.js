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
   

app.use((req,res,next)=>{
    console.log("This is app level Middleware")
    next();
})

app.get("/home" , (req,res)=>{
     throw new Error("This is custom error from home route");
    res.send("This is Home Route");
})


app.get("/service" , (req,res)=>{
    const name = false;
    if(name){
        res.send("This is service route");
    }else{
        res.status(200).send("Something went wrong in service route");
    }
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something broke!");
})

const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})