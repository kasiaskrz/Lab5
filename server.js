const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
// import the body-parser module
const bodyParser = require('body-parser');
// use body-parser middleware to parse URL-encoded data 
app.use(bodyParser.urlencoded({ extended: true }));

// get index.html file when request is made to '\index' 
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

// define a route handler for GET requests
app.get('/inputform', (req, res) => {
    // retrieve the first name & surname query parameters from the request
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    // send a response 'firstname' and 'lastname' from the query parameters
    res.send(`Hello ${firstname}` + " " + req.query.lastname);
});

// handle GET request for '/inputform'
app.get('/inputform', (req, res) => {
    res.send("Hi" + req.body.firstname + " " + req.body.lastname);
});

// handle POST request for '/inputform',
app.post('/inputform', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// handle GET request for '/hello/:name/:surname'
app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    res.send("Hello " + req.params.name + " " + req.params.surname);
});

// define GET route for '/api/movies' to send a list of movies as a JSON response
app.get('/api/movies', (req, res) => {
    // array of movie objects to send as a response
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Send the array as a JSON response
    res.json({ myMovies:movies });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static('public'));