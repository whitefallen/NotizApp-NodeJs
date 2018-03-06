// NPM Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Custom Module
const notes = require('./notes.js');

/**
 * [titleOption Tile Yargs Option Object]
 * @type {Object}
 */
const titleOption = {
  describe: 'Tile of Note',
  demand: true,
  alias: 't'
};

/**
 * [bodyOption Body Yargs Option Object]
 * @type {Object}
 */
const bodyOption = {
  describe: 'Content of Note',
  demand: true,
  alias: 'b'
}

/**
 * [argv Collection of Possible Arguments]
 * @type {Array}
 */
const argv =  yargs
  .command('add','Add a new note', {
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'Lists all Notes')
  .command('read', 'Read a Note', {
    title: titleOption
  })
  .command('remove', 'Remove a Note', {
    title: titleOption
  })
  .help()
  .argv;

/**
 * [command The Actuall Command]
 * @type {String}
 */
var command = argv._[0];

// If-Cases to Determine the Action
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
