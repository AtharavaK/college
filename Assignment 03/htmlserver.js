const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`
        <h1>Welcome</h1>
        <p>This page is served using Node.js</p>
    `);

    res.end();
});

server.listen(3000);

console.log("Server Started");