const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => a - b;
const g = 9.8;
const PI = 3.14;

// module.exports =  math.js;
// module.exports =  "Hellowww!";
// In case of empty module.exports, It will return an empty object wherever it is required in another file.

// -----------------------------------------------
// Method-1 to export.module
// let obj = {
//     sum: sum,
//     mul: mul,
//     div: div,
//     sub: sub,
//     g: g,
//     PI: PI,
// }

// module.exports = obj;

// ----------------------------------------
// Method-2 to export module

// module.exports = {
//     sum: sum,
//     mul: mul,
//     div: div,
//     sub: sub,
//     g: g,
//     PI: PI,
// }

// --------------------------------
// Method-3 to export module

module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.div = (a, b) => a / b;
module.exports.sub = (a, b) => a - b;
module.exports.g = 9.8;
module.exports.PI = 3.14;