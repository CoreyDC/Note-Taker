// LISTENING FOR PORT 3301
const PORT = process.env.PORT || 3001;

// VARIABLES TO BRING IN PACKAGES AND ROUTES 
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// BRINGING IN DIRECTORIES TO SERVER
app.use(express.urlencoded({
    extended: true
}));

// BRINGING IN ROUTES USING .USE 
app.use(express.static('public'));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENING TO SERVER
app.listen(PORT, () => {
    console.log(`Now listening on port http://localhost:${PORT}`);
});