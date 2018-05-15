const fs = require('fs');

const dataToAppend = 'Hello Sangeeth!';
fs.appendFile('greetings.txt', dataToAppend, err => {
  if (err) return console.log(`Error appending '${dataToAppend}' to the file`);

  console.log(`String ${dataToAppend} has been appended to the file`);
});
