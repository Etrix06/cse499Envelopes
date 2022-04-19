const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/envelopes', (req, res, next) => {
    res.send('<form action="/envelope" method="POST"><input type="text" name="title"><button type="submit">Add Envelope</button></form>');
});

app.use('/envelope', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello From Express line 7.</h1>');
});

app.listen(3000);

console.log('Listening on 3000');