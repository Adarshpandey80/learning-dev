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
const joinPage = (req,res) =>{
    res.render("./student/joinUs")
}
const contactPage = async (req,res) =>{
    const stuData = await Student.find()
    res.render("./student/contact" ,{Data:stuData});
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
    
    

  const deleteStudent = async (req, res) => {
    const {id} = req.query;
    const del = await Student.findByIdAndDelete(id);
    const studata = await Student.find();
    res.render("./student/contact", {Data: studata});
  }

const editStudentForm = async (req ,res)=>{
    const studata = await Student.find();
    res.render("./student/editForm" , {Data:studata});
}
 
  const editStudent = async (req ,res)=>{
    const {id} = req.query;
    const edit = await Student.findOneAndUpdate(id);
    const studata = await Student.find();
    res.render("./student/contact" , {Data:studata});
  }



module.exports = {
    homePage,
    aboutPage,
    subjectPage,
    joinPage,
    contactPage,
    saveStudent,
   deleteStudent,
   editStudentForm,
   editStudent

}