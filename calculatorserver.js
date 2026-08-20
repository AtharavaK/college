const http = require("http");
const url = require("url");
const server = http.createServer((req,res)=>{
let q =url.parse(req.url,true).query;
let a =parseInt(q.a);
let b =parseInt(q.b);
let sum = a+b;
res.end("Result = " + sum);
});
server.listen(3000);
console.log("Calculator Server Running");