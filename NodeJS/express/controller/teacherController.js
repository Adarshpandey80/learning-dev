const home = (req,res)=>{
    res.send("<h1> this is teacher home page</h1>")
}
const about = (req,res)=>{
    res.send("<h1> this is teacher about page</h1>")
}
const subject = (req,res)=>{
    res.send("<h1> this is teacher subject page</h1>")
}
const department = (req,res)=>{
    res.send("<h1> this is teacher department page</h1>")
}


module.exports = {
    home,
    about,
    subject,
    department
}