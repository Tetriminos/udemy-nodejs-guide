const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (err) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    var note = {
        title,
        body
    }

    let duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
}

let readNote = (title) => {
    let notes = fetchNotes();
    let theNote = notes.filter((note) => note.title === title);
    return theNote[0];
}

let removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

let logNote = (note) => {
    debugger;
    console.log('Title:', note.title);
    console.log('---');
    console.log('Body:', note.body);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote,
    logNote
};
