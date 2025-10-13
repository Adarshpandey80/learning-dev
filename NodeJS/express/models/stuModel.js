const mongoose = require('mongoose');
const stuSchema = new mongoose.Schema({
    name: String,
    city: String,
    fees: Number,
    phone: Number

})

module.exports = mongoose.model("student", stuSchema)