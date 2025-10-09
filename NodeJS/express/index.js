const express = require('express');
const app = express();
const stuRout = require('./router/studentRouter')

app.use('/student' , stuRout)







app.listen(8000,()=>{
    console.log("app is listing on port 8000")
})