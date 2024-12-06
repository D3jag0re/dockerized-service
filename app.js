// Using express framework 
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about us page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to contact us page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
