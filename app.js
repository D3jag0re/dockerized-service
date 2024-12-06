// Using express framework 
const express = require('express');
const auth = require('basic-auth');
const env = require('dotenv');
const app = express();
const port = 4000;
require('dotenv').config()


// Routes 
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about us page');
});

app.get('/secret', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
