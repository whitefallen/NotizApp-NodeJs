const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv =  yargs.argv;

var command = process.argv[2];

if(command == 'add') {
  console.log('Adding Note.')
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    notes.logNote(note);
  } else {
    console.log(`Note with the title already exist`)
  }
} else if(command == 'list') {
  var allNotes = notes.getAll();
  console.log('Listing All Notes.');
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if(command == 'read') {
  var note = notes.getNote(argv.title);
  if(note) {
    notes.logNote(note);
  } else {
    console.log('Note not Found');
  }
} else if(command == 'remove') {
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Cant find Command.');
}
