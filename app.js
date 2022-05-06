const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const { render, cookie } = require('express/lib/response');

//routes
const envelopeRoutes = require('./routes/envelopeRoutes');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middleware/is-auth');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//routes
app.get('*', checkUser);

app.get('/', (req, res, next) => {
    res.render('home', { title: 'Home' });
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
app.use('/envelopes', requireAuth, envelopeRoutes);

//auth routes
app.use(authRoutes);

//404 Page
app.use((req, res, next) => {
    res.status(404).render('404', { title: '404 Page Not Found' });
});