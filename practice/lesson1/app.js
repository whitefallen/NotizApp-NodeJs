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
  notes.addNote(argv.title, argv.body);
} else if(command == 'list') {
  console.log('Listing All Notes.')
  notes.getAll();
} else if(command == 'read') {
  notes.getNote(argv.title);
  console.log('Reading Specific Note')
} else if(command == 'remove') {
  notes.removeNote(argv.title);
  console.log('Remove Specific Note')
} else {
  console.log('Cant find Command.')
}
