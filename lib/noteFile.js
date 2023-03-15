const fs = require('fs');
const path = require('path');

function newNote(body, arrayForNotes) {
    const note = body;
    arrayForNotes.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: arrayForNotes
        })
    )

    return note;
};

function deleteNote(arrayForNotes, id) {
    let idDelete = parseInt(id);
    arrayForNotes.splice(idDelete, 1);

    for (let i = idDelete; i < arrayForNotes.length; i++) {
        arrayForNotes[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: arrayForNotes
        })
    )
};

module.exports = {
    newNote,
    deleteNote
};