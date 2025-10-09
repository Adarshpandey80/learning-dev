const express = require("express")

const route = express.Router();
const stucontroll = require("../controller/stuController")


route.get("/home", stucontroll.homePage)


route.get("/about",stucontroll.aboutPage)

route.get("/fee", stucontroll.feePage)

route.get("/salery",stucontroll.saleryPage)









module.exports = route