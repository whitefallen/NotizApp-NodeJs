console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

//console.log(user);

console.log('Result: ' + notes.add(5,-2));

// // Mit Template String
// fs.appendFile('greetings.txt', `Hello Welcome Mr.${user.username}! You are ${notes.age}.`,function(err) {
//   if(err) {
//     console.log('Unable to write file.');
//   }
// });

/*
// Ohne Template String, mit konkatenieren
fs.appendFile('greetings.txt', 'Hello Welcome Mr.' + user.username + '!',function(err) {
  if(err) {
    console.log('Unable to write file.');
  }
});
*/
