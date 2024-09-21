//can't use require use import instead
// const chalk = require("require");


import chalk from 'chalk'; 
console.log(chalk.red('Hello world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));