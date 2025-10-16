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

const infoPage = async (req,res) =>{

  res.render("./student/infostu", {Data: []});
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
    const {id} = req.params;
    const studata = await Student.findById(id);
    res.render("./student/editForm" , {studata} );
}
 
  const editStudentData = async (req ,res)=>{
   const {id} =req.params;
   const newData = req.body.list;
   const update = await Student.findByIdAndUpdate(id, newData);
   const studata = await Student.find();
   res.render("./student/contact" , {Data:studata} )
  }

  const searchPage = async (req,res) =>{
    const {fee} = req.body;
    const student1 = await Student.find({fees:fee})
    console.log(student1)
    res.render("./student/infostu", {Data:student1})
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
   editStudentData,
   infoPage,
   searchPage
   

}