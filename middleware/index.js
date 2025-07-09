const express = require("express");
const app = express();

let reqCount = 0;

function middleware(req, res, next) {
    reqCount = reqCount + 1;
    console.log(`Total number of requests:  ${reqCount}`);
    next();
}


function addSum(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    res.json({
        ans : a + b,
    });
}


app.get('/sum', middleware, addSum);

app.listen(3000);
