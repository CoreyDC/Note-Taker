// BRINGING IN EXPRESS AND DEFINING ROUTER
const express = require('express');
const router = express.Router();

// NOTES BEING STORED AS A JSON OBJECT IN DB FOLDER
const {
    notes
} = require('../../db/db');

// REQUIRING NOTE FUNCTIONS TO CREATE OR DELETE NOTES
const {
    createNewNote,
    deleteNote
} = require('../../lib/noteFunctions');

// SAVE NOTE TO JSON DB
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

// REQ.BODY SENT FROM CLIENT AS A POST REQUEST, AND NOTE VARIABLE CREATES A NEW NOTE AND ADDS TO THE NOTES DB
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;