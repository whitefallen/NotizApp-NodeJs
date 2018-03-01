console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log(`Command:`, command);

if(command == 'add') {
  console.log('Adding Note.')
  notes.addNote();
} else if(command == 'list') {
  console.log('Listing All Notes.')
} else if(command == 'read') {
  console.log('Reading Specific Note')
} else if(command == 'remove') {
  console.log('Remove Specific Note')
} else {
  console.log('Cant find Command.')
}
