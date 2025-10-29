const express = require('express');
const route = express.Router();
const stuController = require('../controllers/stuController');

route.post("/home", stuController.home);
route.get("/stuinfo" , stuController.getinfo)
route.get(`editdata/${id}` , stuController.editdata);

module.exports = route;