const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const Envelope = require('./models/envelope');

//express app
const app = express();

//connect to mongodb
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(process.env.PORT || 3000))
    .then(console.log('Listening on 3000'))
    .then(console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

//view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/envelope', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

//middleware and Static files
app.use(express.static('public'));

/*
//testing mongoose, mongo, and routes
app.get('/add-envelope', (req, res) => {
    const envelope = new Envelope({
        category: 'Entertainment',
        budgeted: 200,
        balance: 130
    });

    envelope.save()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/all-envelopes', (req, res) => {
    Envelope.find()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/single-envelope', (req, res) => {
    Envelope.findById('626d7ad062c04d9b761ec6c7')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});
*/

app.get('/', (req, res, next) => {
    res.redirect('/envelopes');
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


//envelope routes
app.get('/envelopes', (req, res, next) => {
    Envelope.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        .then((result) => {
            res.render('index', { title: 'All Envelopes', envelopes: result })
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/envelopes/add-envelope', (req, res, next) => {
    res.render('add-envelope', { title: 'Add Envelope' });
});

//404 Page

app.use((req, res, next) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
});