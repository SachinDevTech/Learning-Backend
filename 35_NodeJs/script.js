// Just printing the below code by "node script.js" in node runtime environment.

// let num1 = 5;
// for (let index = 1; index <= num1; index++) {
//     console.log("Hellow " + index);
// }

// console.log("Bye! ");


// ------------------------------------------------------------------------
// process.argv
// console.log(process.argv); //returns an array of arguments we passed along with two by-default are present. 


// Let's take an example

// let args = process.argv;
// for (let i = 0; i < args.length; i++) {
//     console.log("Hellow and Welcome, " + args[i]);
// }


// -------------------------------------------------------------------------
// File Required here
const someValue = require("./math");

// -------------------------------------------------
//print all the functions and key-values present in an object literal
// console.log(someValue); 
// ----------------------------------
// Passing values as an argument in function present in other file
// console.log(someValue.sum(12,12)); 

// -------------------------------------------
// requiring the modules from other directories

// const fruitFal = require("./Fruits");
// console.log(fruitFal);


// ------------------------------------------------