const authorModel  =  require("../models/authorModel")
const booksModel = require("../models/booksModel")


const insertData = async(req,res)=>{

    console.log(req.body);
   const { name, address, booktitle, price } = req.body;
    const author = await authorModel.create({
        name: name,
        address: address
    })
    const book = await booksModel.create({
        booktitle: booktitle,
        price: price
    })
    await authorModel.findByIdAndUpdate(author._id, { $push: { "booksid": book._id } });
    res.send("Data save!!!")
}



const userDisplay = async (req, res) => {
    const author = await authorModel.find().populate("booksid");
    res.send(author);
}

const bookSave = async (req, res) => {
    const { aid, booktitle, price } = req.body;
    const book = await booksModel.create({
        booktitle: booktitle,
        price: price
    })

    await authorModel.findByIdAndUpdate(aid, {$push:{"booksid":book._id}});
    res.send("OKKK");
}


module.exports = {
    insertData,
     userDisplay,
    bookSave
}