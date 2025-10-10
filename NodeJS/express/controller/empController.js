
const name = (req,res)=>{
    res.render("./employee/name")
}
const compony = (req,res)=>{
    res.render("./employee/compony")
}
const contact= (req,res)=>{
    res.render("./employee/contact")
}




module.exports = {
    name,
    compony,
    
    contact
}