const fs = require('fs');
const os = require('os');

const user = os.userInfo();
// console.log('[user ]', user);

const dataToAppend = `Hello ${user.username}`;
fs.appendFile('greetings.txt', dataToAppend, err => {
  if (err) return console.log(`Error appending '${dataToAppend}' to the file`);

  console.log(`String ${dataToAppend} has been appended to the file`);
});
