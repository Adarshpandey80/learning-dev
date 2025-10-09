const express = require('express');
const app = express();
const stuRout = require('./router/studentRouter')
const empRout = require("./router/employeeRouter")
const teacherRoute = require("./router/teacherRoute")

app.use('/student' , stuRout)

app.use('/employee' ,empRout)

app.use('/teacher' , teacherRoute)





app.listen(8000,()=>{
    console.log("app is listing on port 8000")
})