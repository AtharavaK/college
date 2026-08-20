const http = require("http");
const server = http.createServer((req,res)=>{
console.log("Time:",new Date().toLocaleString());
console.log("URL:",req.url);
res.end("Request Logged");
});
server.listen(3000);
console.log("Server Running");