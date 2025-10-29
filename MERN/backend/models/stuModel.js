const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
       id : Number,
       name : String,
       location : String,
       inrollsub : String,
       sturoll: Number,
})

module.exports = mongoose.model("stumodel" , stuSchema)