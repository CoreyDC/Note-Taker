// VARIABLES TO BRING IN PACKAGES AND ROUTES
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = 3001;

// BRINGING IN DIRECTORIES TO SERVER
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENING TO SERVER
app.listen(PORT, () => {
    console.log(`Now listening on port http://localhost:${PORT}`);
});