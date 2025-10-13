const Student = require("../models/stuModel")


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
     const {name , age , fee , phone} = req.body
     console.log(req.body)

       const student = mongoose.create({
        name : name,
        age : age,
        fee : fee,
        phone : phone
       })
        await student.save()
        res.redirect("/student/about")
     }
    
    






module.exports = {
    homePage,
    aboutPage,
    subjectPage,
    contactPage,
    saveStudent

}