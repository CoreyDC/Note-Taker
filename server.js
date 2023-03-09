// VARIABLES TO REQUIRE AND INITIALIZE EXPRESS & PACKAGES
const express = require('express');
const app = express();
const PORT = 3001;

const fs = require('fs');
const path = require('path');

// INITIALIZING APP

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});


