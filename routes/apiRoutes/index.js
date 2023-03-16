// BRINGING IN PACKAGES AND DEFINING ROUTER
const express = require('express');
const router = express.Router();
const notesRoutes = require('./noteRoutes');

// USING .USE MIDDLEWARE FUNCTION TO USE NOTESROUTES
router.use(notesRoutes);

module.exports = router;