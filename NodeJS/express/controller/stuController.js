const Student = require("../models/stuModel")
const mongoose = require("mongoose")

const homePage = (req,res) =>{
    res.render("./student/home")
}
const aboutPage = (req,res) =>{
    res.render("./student/about")
}
const subjectPage = (req,res) =>{
    res.render("./student/subject")
}
const contactPage = (req,res) =>{
    res.render("./student/contact")
}

const saveStudent = async (req,res) =>{
    //  const {name , city , fees , phone} = req.body
     console.log(req.body)
        // const student = new Student({
        //     name,
        //     city,
        //     fees,
        //     phone
        // })
        // await student.save()
        // const student = await Student.create({
        //     name : name, 
        //     city : city,
        //     fees: fees,
        //     phone: phone
        // })

        const newList = new Student(req.body.list);
        await newList.save();
        res.redirect("/student/about")
     }
    
    






module.exports = {
    homePage,
    aboutPage,
    subjectPage,
    contactPage,
    saveStudent

}