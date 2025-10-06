const http = require("http");
http.createServer((req,res)=>{
res.write("<h1> start node clases</h1>");
res.end("<h3> server end....</h3>");
}).listen(8000)