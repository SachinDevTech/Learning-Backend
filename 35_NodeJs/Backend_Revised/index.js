// console.log("hi there");

console.log("Printing Current directory:");
console.log(__dirname);


//will join the path we have written in the log
const path = require("path");
console.log(path.join(__dirname,"index.js"));
// will go two step back and then join the files we have written in the join fxn
console.log(path.join(__dirname,"../../sachin.js", "gaurav.js"));
