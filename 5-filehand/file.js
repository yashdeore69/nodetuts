const fs = require("fs");

//SYNCHRONOUSLY CREATING A FILE
// fs.writeFileSync("./text.txt", "Hello Wold");

//ASYNCHRONOUSLY CREATING A FILE
// fs.writeFile("./text.txt", "Hello Wold ASYNC", err => {});

//SYNCHRONOUSLY READING A FILE
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

//ASYNCHRONOUSLY READING A FILE
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("error"), err;
//     } else {
//         console.log(result);
//     }
// });


//BLOCKING OPERATION
// console.log("1");
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// console.log("2");

//NON-BLOCKING OPERATION
console.log("1");
fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
})
console.log("2");