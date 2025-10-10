const express = require("express");
const route = express.Router();
const empController = require("../controller/empController")

route.get("/name", empController.name)

route.get('/compony' , empController.compony)

route.get('/contact' , empController.contact)





module.exports = route