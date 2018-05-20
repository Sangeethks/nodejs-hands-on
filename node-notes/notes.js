// Import file system module
const fs = require('fs');
// Import OS module
const os = require('os');
// User data
let user = os.userInfo();

const notes = {
  addNote: (title, body) => {
    if (!title) return console.log('Missing title');

    // Assign default value to body
    body = body || '';

    console.log('[notes addNote title]', title);
    console.log('[notes addNote body]', body);

    // // Check for notes existence
    // let notes = fs.readFile('./notes.json', (err, data) => {
    //   // If error, exit out
    //   if (err) return console.log('Error getting notes', err);
    //
    //   console.log('[addNote readFile data]', data);
    //
    //   let notes = data.notes;
    // });

    // let notes = [{
    //   title, body
    // }];
    // let _info = {
    //   created: new Date().getTime(),
    //   updated: new Date().getTime(),
    //   author: os.
    // }
    // let data = {
    //
    // }

    // fs.appendFile()
  }
}

module.exports = notes;
