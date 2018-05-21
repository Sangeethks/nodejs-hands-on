// Import file system module
const fs = require('fs');
// Import OS module
const os = require('os');
// User data
let user = os.userInfo();
// Declare the file path
const filePath = './notes.json';

const notes = {
  addNote: (title, body) => {
    if (!title) return console.log('Missing title');

    // Assign default value to body
    body = body || '';

    let notes = [];
    let _info = {
      created: new Date(),
      updated: new Date(),
      author: user.username
    };
    let note = { title, body, _info };

    try {
      notesString = fs.readFileSync(filePath);
      notes = JSON.parse(notesString);

      let duplicateNotes = notes.filter(note => note.title === title);

      if (duplicateNotes && duplicateNotes.length) return;
    } catch (e) {

    }

    notes.push(note);
    fs.writeFileSync(filePath, JSON.stringify(notes));
  },
  // Lists all notes in the notes.json file
  listNotes: () => {
    console.log('[listNotes]');
  },
  readNote: (title) => {
    console.log('[readNote]');
    console.log('[readNote title]', tille);

  },
  deleteNote: (title) => {
    console.log('[deleteNote]');
    console.log('[deleteNote title]', tille);

  },
}

module.exports = notes;
