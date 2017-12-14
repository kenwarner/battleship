const path = require('path');
const express = require('express');
const app = express();

// just a simple server to serve static web pages for now
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);