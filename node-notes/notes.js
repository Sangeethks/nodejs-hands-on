const notes = {
  addNote: (title, body) => {
    if (!title) return console.log('Missing title');

    // Assign default value to body
    body = body || '';

    console.log('[notes addNote title]', title);
    console.log('[notes addNote body]', body);
  }
}

module.exports = notes;
