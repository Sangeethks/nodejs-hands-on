const yargs = require('yargs');

// Get the argument from the terminal
let argv = yargs.argv;
// Now get the command
let command = argv._[0];

console.log('[Commands]', command);
