const mongoose = require("mongoose");

const profileSchema= new mongoose.Schema ({

     name:String,
  address:String,
  booksid: [{type:mongoose.Schema.Types.ObjectId, ref:"book"}]
})

module.exports= mongoose.model("author", profileSchema);