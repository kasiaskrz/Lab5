const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/inputform', (req, res) => {
    // retrieve the first name & surname query parameters from the request
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    // send a response 'firstname' and 'lastname' from the query parameters
    res.send(`Hello ${firstname}` + " " + req.query.lastname);
});


app.get('/inputform', (req, res) => {
    res.send("Hi" + req.body.firstname + " " + req.body.lastname);
});

app.post('/inputform', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name;
    res.send("Hello " + req.params.name + " " + req.params.surname);
});

app.get('/api/movies', (req, res) => {
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
    res.json({ myMovies:movies });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static('public'));