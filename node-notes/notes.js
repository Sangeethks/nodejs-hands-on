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
    // Check if file exists or not
    let fileExist = fs.existsSync(filePath);

    let _info = {
      created: new Date(),
      updated: new Date(),
      author: user.username
    };
    let note = { title, body, _info };

    if (fileExist) {
      fs.readFile(filePath, (err, data) => {
        if (err) return console.log(`[Unable to read note from ${filePath}]`);

        // Get the notes
        notesArr = JSON.parse(data);

        console.log(`[notesArr]`, notesArr);

        // After getting current notes, append to the notes list
        let newNoteArr = notesArr.push(note);

        console.log(`[newNoteArr]`, newNoteArr);

        // fs.appendFile(filePath, JSON.stringify(newNoteArr), (err) => {
        //   if (err) return console.log(`[Error adding note "${title}"]`);
        //
        //   console.log(`[Note "${title}" added]`);
        // });
      });
    } else {
      let notes = JSON.stringify([note]);

      console.log('[notes]', notes);

      fs.appendFile(filePath, notes, (err) => {
        if (err) return console.log(`[Error adding note "${title}"]`);

        console.log(`[Note "${title}" added]`);
      });
    }
  },
  // Lists all notes in the notes.json file
  listNotes: () => {
    let fileExist = fs.existsSync(filePath);
    if (!fileExist) return console.log('[File does not exists]');

    let notes = fs.readFile(filePath, (err, data) => {
      if (err) return console.log('[Unable to list notes]');

      let notes = JSON.parse(data);
      console.log('[listNotes notes]', notes);
    });
  }
}

module.exports = notes;
