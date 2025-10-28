const express = require('express');
const route = express.Router();
const stuController = require('../controllers/stuController');

route.post("/home", stuController.home);



module.exports = route;