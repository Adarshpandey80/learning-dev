const express = require("express")

const route = express.Router();
const stucontroll = require("../controller/stuController")


route.get("/home", stucontroll.homePage)


route.get("/about",stucontroll.aboutPage)

route.get("/subject", stucontroll.subjectPage)
route.get("/joinUs", stucontroll.joinPage)

route.get("/contact",stucontroll.contactPage)

route.post("/save", stucontroll.saveStudent)

route.get("/delete" ,stucontroll.deleteStudent)
route.get("/EditForm" , stucontroll.editStudentForm)






module.exports = route