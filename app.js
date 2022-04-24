const express = require('express');
const bodyParser = require('body-parser');

//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-envelope', (req, res, next) => {
    res.send('<form action="/envelope" method="POST"><input type="text" name="title"><button type="submit">Add Envelope</button></form>');
});

app.post('/envelope', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.get('/signup', (req, res, next) => {
    res.render('signup');
});

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/envelopes/add-envelope', (req, res, next) => {
    res.render('add-envelope');
});

//404 Page

app.use((req, res, next) => {
    res.status(404).render('404');
});


//Listen for requests
app.listen(3000);

console.log('Listening on 3000');