const { home } = require("./teacherController")


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






module.exports = {
    homePage,
    aboutPage,
    subjectPage,
    contactPage

}