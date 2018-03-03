console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    return notes;
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = function(title, body) {
  console.log('Adding Note:', title, body);
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNote = notes.filter((note) => note.title === title);

  if(duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting Note:', title);
};

var removeNote = (title) => {
  console.log('Remove Note:', title);
  var notes = fetchNotes()
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;
};

module.exports = {
  //addNote: addNote
  addNote,
  //getAll: getAll
  getAll,
  //getNote: getNote
  getNote,
  //removeNote: removeNote
  removeNote
}
