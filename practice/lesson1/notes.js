console.log('Starting notes.js');

var addNote = function(title, body) {
  console.log('Adding Note:', title, body);
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting Note:', title);
};

var removeNote = (title) => {
  console.log('Remove Note:', title);
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
