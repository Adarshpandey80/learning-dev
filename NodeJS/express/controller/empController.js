
const name = (req,res)=>{
    res.send("<h1>this is name route</h1>")
}
const id = (req,res)=>{
    res.send("<h1>this is employee id 12345</h1>")
}
const salery = (req,res)=>{
    res.send("<h1>this is employee salery</h1>")
}
const contact = (req,res)=>{
    res.send("<h1>this is employee contact</h1>")
}


module.exports = {
    name,
    id,
    salery,
    contact
}