const express = require("express")

const route = express.Router();
const stucontroll = require("../controller/stuController")


route.get("/home", stucontroll.homePage)


route.get("/about",stucontroll.aboutPage)

route.get("/subject", stucontroll.subjectPage)

route.get("/contact",stucontroll.contactPage)









module.exports = route