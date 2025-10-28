const home = (req,res) =>{
    // const {data} = req.body || {};
    res.send("Hello from Home Page");
    console.log(req.body)
}

module.exports = {
    home,
}