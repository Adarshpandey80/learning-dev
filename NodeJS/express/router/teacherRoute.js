const express = require("express")
const route = express.Router()
const teacherCot = require("../controller/teacherController")

route.get("/home" ,teacherCot.home)

route.get('/about' ,teacherCot.about)
route.get('/subject' , teacherCot.subject)
route.get('/department' ,teacherCot.department)

module.exports = route