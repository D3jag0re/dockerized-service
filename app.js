// Using express framework 
const express = require('express');
const auth = require('basic-auth');
const env = require('dotenv');
const app = express();
const port = 4000;
require('dotenv').config()

// Middleware for Basic Auth
function basicAuth(req, res, next) {
    const user = auth(req); // Use the `basic-auth` package to parse the Authorization header

    const validUsername = process.env.USERNAME;
    const validPassword = process.env.PASSWORD;

    // Check if the credentials are valid
    if (user && user.name === validUsername && user.pass === validPassword) {
        return next(); // Proceed to the route handler
    }

    // If authentication fails, respond with 401 and set the `WWW-Authenticate` header
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.status(401).send('Authentication required');
}

// Routes 
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to about us page');
});

app.get('/secret', basicAuth, (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
});
