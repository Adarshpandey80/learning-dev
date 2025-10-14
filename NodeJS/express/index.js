const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stuRout = require('./router/studentRouter')
const empRout = require("./router/employeeRouter")
const teacherRoute = require("./router/teacherRoute")

app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());

app.set("view engine", "ejs")

app.use('/student', stuRout)

app.use('/employee', empRout)

app.use('/teacher', teacherRoute)

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB').then(() => {
    console.log("DB connected")
}).catch((err) => {
    console.log(err)
})



app.listen(8000, () => {
    console.log("app is listing on port 8000")
})