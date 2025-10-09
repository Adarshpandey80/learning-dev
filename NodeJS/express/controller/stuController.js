

const homePage = (req,res) =>{
    res.send("<h1>this is home page</h1>")
}
const aboutPage = (req,res) =>{
    res.send("<h1>this is about page</h1>")
}
const feePage = (req,res) =>{
    res.send("<h1>this is fee page</h1>")
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