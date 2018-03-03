console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv =  yargs.argv;

var command = process.argv[2];
console.log(`Command:`, command);
console.log(`Node Argv:`, process.argv);
console.log(`Yarg Argv:`, argv);

if(command == 'add') {
  console.log('Adding Note.')
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    console.log('Note:',note.title);
  } else {
    console.log(`Note with the title already exist`)
  }
} else if(command == 'list') {
  console.log('Listing All Notes.');
  notes.getAll();
} else if(command == 'read') {
  notes.getNote(argv.title);
  console.log('Reading Specific Note');
} else if(command == 'remove') {
  var removed = notes.removeNote(argv.title);
  var message = removed ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Cant find Command.');
}
