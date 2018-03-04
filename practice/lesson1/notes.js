console.log('Starting notes.js');

const fs = require('fs');

/**
 * [fetchNotes gets all Note from Json file]
 * @method fetchNotes
 * @return {array}   [description]
 */
var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    return notes;
  } catch (e) {
    return [];
  }
};

/**
 * [saveNotes saves a Note to the Json File]
 * @method saveNotes
 * @param  {array}  notes [Array of Note Objects]
 */
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/**
 * [addNote adds a Note to the Note Array]
 * @method addNote
 * @param  {string} title [description]
 * @param  {string} body  [description]
 * @return {array}       [description]
 */
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


/**
 * [getAll returns all Notes from the array]
 * @method getAll
 * @return {[type]} [description]
 */
var getAll = () => {
  console.log('Getting all notes');
};

/**
 * [getNote returns a single Note from the array]
 * @method getNote
 * @param  {string} title [description]
 * @return {object}       [description]
 */
var getNote = (title) => {
  console.log('Getting Note:', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

/**
 * [removeNote removes a Note from the Array and Saves the rest to the Json File]
 * @method removeNote
 * @param  {string}   title [description]
 * @return {boolean}         [description]
 */
var removeNote = (title) => {
  console.log('Remove Note:', title);
  var notes = fetchNotes()
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;
};

var logNote = (note) => {
  console.log(`---`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  //addNote: addNote
  addNote,
  //getAll: getAll
  getAll,
  //getNote: getNote
  getNote,
  //removeNote: removeNote
  removeNote,
  //logNote : logNote
  logNote
}
