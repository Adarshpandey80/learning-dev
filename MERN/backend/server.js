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
    res.send("This is Home Route");
})


app.get("/service" , (req,res,next)=>{
    console.log("Frist Service level middleware");
    next();
}, (req,res,next)=>{
    console.log("SEcond service level middleware");
    next();
} , (req,res,next)=>{
    console.log("Third service level middleware");
    next();
},  (req,res)=>{
    res.send("This is Home Route");
})



const port = process.env.PORT ;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})