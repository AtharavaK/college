const http = require("http");
const server = http.createServer((req,res)=>{
res.writeHead(200,
{
"Content-Type":"application/json"
});
let student =
{
id:101,name:"Rahul",course:"BCA"};
res.end(JSON.stringify(student));
});
server.listen(3000);
console.log("API Running");