const mongoose = require("mongoose");

const userSchema= new mongoose.Schema ({

  booktitle:String,
    price:Number
})

module.exports= mongoose.model("book", userSchema);