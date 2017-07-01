console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

let filteredArray = _.uniq(['Domagoj', 1, 'Domagoj', 1, 2, 3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
// console.log(_.isString(2));

// let res = notes.addNote();
// console.log(res);
//
// let sum = notes.add(3, 7);
// console.log(sum);

// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//     if (err) {
//         console.log('Unable to write to file.');
//     }
// });
