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

// const http = require("http");
// const fs = require('fs')
// http.createServer((req,res)=>{
//  res.write("<h1>create server</h1>")
//    fs.readFile("newFile.txt", (err, data)=>{
//     if(err) throw err;
//     res.write(data)
//      res.end()
//    })


// }).listen(8000,()=>{
//     console.log("server is listin on port 8080")
// })
// ===============================================================08/10==========

// in fs module create file

const fs = require('fs')

// fs.appendFile("ad.txt" , 'here i add some text data' , (err)=>{
//   if(err) throw err;
//   console.log("create new file");
// })

// fs.open() method

// fs.open('new.txt' , 'w' ,(err ,file)=>{
//   if(err) throw err;
//   console.log("read file")
// })

// fs.writeFile() 

// fs.writeFile('ad.txt' ,"new data updated" , (err)=>{
//    if(err) throw err;
//    console.log("update new data")
// })

// delete data fs.unlink()

// fs.unlink('ad.txt' ,(err)=>{
//   if(err) throw err
//   console.log('delete file')
// })

// Rename file fs.rename()

// fs.rename('newFile.txt' ,'new.txt' ,(err)=>{
//   if(err) throw err;
//   console.log("rename file");
// })