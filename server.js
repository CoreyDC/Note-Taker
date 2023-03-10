// VARIABLES TO REQUIRE AND INITIALIZE EXPRESS & PACKAGES
const express = require('express');
const app = express();
const PORT = 3001;

const fs = require('fs');
const path = require('path');

// SETTING UP VIEW ENGINE FOR HTML
app.set('view engine', 'ejs');

// BRINGING IN ROUTES
const indexRouter = require('./routes/html');
const notesRouter = require('./routes/notes');


// USING ROUTERS
app.use('/', indexRouter);
app.use('/', notesRouter)


// INITIALIZING APP

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});


