const express = require('express');
const route = express.Router();
const stuController = require('../controllers/stuController');

route.post("/home", stuController.home);
route.get("/stuinfo" , stuController.getinfo)
route.get("/editdata/:id" , stuController.editdata);
route.put("/update/:id" , stuController.updatedata);
route.delete("/delete/:id" , stuController.deletedata);

module.exports = route;