const { home } = require("./teacherController")


const homePage = (req,res) =>{
    res.render("./student/home")
}
const aboutPage = (req,res) =>{
    res.render("./student/about")
}
const feePage = (req,res) =>{
    res.render("./student/feePage")
}
const saleryPage = (req,res) =>{
    res.send("<h1>this is salery page</h1>")
}






module.exports = {
    homePage,
    aboutPage,
    feePage,
    saleryPage

}