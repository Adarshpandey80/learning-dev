const stuschema = require('../models/stuModel');
const mongoose = require("mongoose");


const home = (req,res) =>{
    const {id , name , location , sub , rollno} = req.body;

    const stuData = new stuschema({
        id : id,
        name : name,
        location : location,
        inrollsub : sub,
        sturoll : rollno
    })
    
    stuData.save().then(()=>{
        console.log("data inserted successfully");
    }).catch((err)=>{
        console.log("error while inserting data" , err);
    })

}


const getinfo =  async(req,res)=>{
    const studentData = await stuschema.find();
    res.send(studentData)
}

const  editdata = (req,res)=>{
    // const id = req.body.id;
    console.log(req.body)
    res.send("edit data route is working")
}

module.exports = {
    home,
    getinfo,
    editdata
}