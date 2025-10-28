const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const stuRoutes= require('./routes/stuRoutes');



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/student" , stuRoutes);




app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})