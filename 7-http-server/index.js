const http = require("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req, res) => {
    console.log("New request received");
    
    const log = `${Date.now()}: ${req.url} New request received\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname) {
            case "/":
                res.end("Home");
                break;
            case "/about":
                res.end("I am Yash");
                break;
            default:
                res.end("404 not found");
        }
    })
});

myServer.listen(3000, () => console.log("server started"));


