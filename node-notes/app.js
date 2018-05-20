const yargs = require('yargs');
// Import notes module
const notes = require('./notes');

// Get the argument from the terminal
let argv = yargs.argv;
// Now get the command
let command = argv._[0];

console.log('[Commands]', command);


// Execute methods according to different commands
switch (command) {
  case 'add':
    // Get the arguments
    let title = argv.title;
    let body = argv.body;
    
    notes.addNote(title, body);
    break;
  default:

}
