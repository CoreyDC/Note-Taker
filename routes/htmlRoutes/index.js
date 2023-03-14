// VARIABLES TO BRING IN PACKAGES
const express = require('express');
const router = express.Router();

const path = require('path');

// ROUTING HTML FILES
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// EXPORT FILE
module.exports = router;