const http = require("http");
const server = http.createServer((req,res)=>{
if(req.url==="/home")
{
 res.end("Welcome to Home Page");
}
else if(req.url==="/about")
{
 res.end("About Us Page");
}
else if(req.url==="/contact")
{
 res.end("Contact Us Page");
}
else
{
 res.end("Page Not Found");
}
116
});
server.listen(3000);
console.log("Server Running");