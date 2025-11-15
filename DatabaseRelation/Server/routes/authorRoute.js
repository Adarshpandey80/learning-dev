const express = require("express");
const router = express.Router()
const authorControll = require("../controller/authorController")

router.post("/insertData" , authorControll.insertData)
router.get("/display", authorControll.userDisplay);
router.post("/savebook", authorControll.bookSave);

module.exports = router;
