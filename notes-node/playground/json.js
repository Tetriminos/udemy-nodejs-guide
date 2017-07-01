// let obj = {
//     name: 'Domagoj'
// };
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Andrew", "age": 25}';
// let personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote, null, 4);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

// note
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
