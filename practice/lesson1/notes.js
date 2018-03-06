const fs = require('fs');

/**
 * [fetchNotes gets all Note from Json file]
 * @method fetchNotes
 * @return {Array}   [description]
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
 * @param  {Array}  notes [Array of Note Objects]
 */
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/**
 * [addNote adds a Note to the Note Array]
 * @method addNote
 * @param  {String} title [description]
 * @param  {String} body  [description]
 * @return {Array}       [description]
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
 * @return {Array} [array of Note objects]
 */
var getAll = () => {
  console.log('Getting all notes');
  return fetchNotes();
};

/**
 * [getNote returns a single Note from the array]
 * @method getNote
 * @param  {String} title [description]
 * @return {Object}       [description]
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
 * @param  {String}   title [description]
 * @return {Boolean}         [description]
 */
var removeNote = (title) => {
  console.log('Remove Note:', title);
  var notes = fetchNotes()
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length !== notes.length;
};

/**
 * [logNote Prints Note Details to the Console]
 * @method logNote
 * @param  {Object} note [description]
 */
var logNote = (note) => {
  console.log(`---`);
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

/**
 * [exports]
 * @type {Object}
 */
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
