// BRINGING IN EXPRESS AND INTITALIZING WITH ROUTER
const express = require('express');
const router = express.Router();

// GETS A RENDER RESPONSE TO RENDER INDEX HTML
router.get('/', (req, res) => {
    res.render('index');
}); 

module.exports = router;