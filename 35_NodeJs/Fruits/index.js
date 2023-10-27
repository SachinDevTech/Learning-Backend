// Exporting modules from this directory to other

const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let Fruits = [apple, banana, orange];
module.exports = Fruits;