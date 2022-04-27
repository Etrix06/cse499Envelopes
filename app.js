const express = require('express');
const bodyParser = require('body-parser');

//express app
const app = express();

//view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/envelope', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

//middleware and Static files
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    const testEnvelopes = [
        { category: 'Eating Out', budgeted: 600, remaining: 450 },
        { category: 'Gas', budgeted: 150, remaining: 100 },
        { category: 'Entertainment', budgeted: 200, remaining: 130 }
    ];
    res.render('index', { title: 'Home', envelopes: testEnvelopes });
});

app.get('/login', (req, res, next) => {
    res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res, next) => {
    res.render('signup', { title: 'Sign Up' });
});

app.get('/about', (req, res, next) => {
    res.render('about', { title: 'About Us' });
});

app.get('/envelopes/add-envelope', (req, res, next) => {
    res.render('add-envelope', { title: 'Add Envelope' });
});

//404 Page

app.use((req, res, next) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
});


//Listen for requests
app.listen(3000);

console.log('Listening on 3000');