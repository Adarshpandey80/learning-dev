// const http = require("http");
// http.createServer((req,res)=>{
// res.write("<h1> start node clases</h1>");
// res.end("<h3> server end....</h3>");
// }).listen(8000)

// userDefine module use to use another function data

// const http = require("http");
// const cyb = require('./cybrom')
// http.createServer((req,res)=>{
//  res.write("<h1>create server</h1>")
//   res.write(cyb.cyberom())
//   res.write(cyb.subName());
//   res.write(cyb.Fee());
//  res.end()

// }).listen(8000,()=>{
//     console.log("server is listin on port 8080")
// })
 


// fs(File System ) module use to read data from another file

const http = require("http");
const fs = require('fs')
http.createServer((req,res)=>{
 res.write("<h1>create server</h1>")
   fs.readFile("newFile.txt", (err, data)=>{
    if(err) throw err;
    res.write(data)
     res.end()
   })


}).listen(8000,()=>{
    console.log("server is listin on port 8080")
})