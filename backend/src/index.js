const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/about/:name/:contect', (req, res) => {
    res.send("name contect")
    console.log(req.params);
})
 
app.get('/demo' ,(req,res)=>{
    res.send("demo page")
    console.log(req.query);
})


app.listen(9999, () => {
    console.log('Server is running on port 3000');
    
})