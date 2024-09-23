// split.js
const { Command } = require('commander');
const program = new Command();

program
  .option('-s, --separator <char>', 'separator character', '/')
  .option('--first', 'only return the first part after split');

program.parse(process.argv);  // Parses the arguments

const options = program.opts();  // Get the options
const input = program.args[0];  // Get the first argument (the string to be split)

if (!input) {
  console.error('No input string provided');
  process.exit(1);
}

// Split the string using the provided separator
const parts = input.split(options.separator);

if (options.first) {
  console.log([parts[0]]);  // Return only the first part
} else {
  console.log(parts);  // Return all parts
}



//run this in CLI
// node split.js -s / --first a/b/c //o/p => ['a']
//node split.js -s /  a/b/c //o/p => ['a','b','c'] 



/*Explanation:
Options: -s (or --separator) allows the user to specify the delimiter for splitting the string. By default, it uses /.
Flags: --first is a boolean flag that modifies behavior to return only the first part of the split.
Auto-help: If you run node split.js --help, it automatically generates help based on the defined options.


Auto-generated Help:
bash
Copy code
Usage: split [options] <string>

Options:
  -s, --separator <char>  separator character (default: "/")
  --first                 only return the first part after split
  -h, --help              display help for command
The commander package simplifies handling command-line input in Node.js projects and is highly customizable for building complex CLIs.
*/