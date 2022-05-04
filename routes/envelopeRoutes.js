const express = require('express');
const Envelope = require('../models/envelope');
const router = express.Router();

router.get('/envelopes', (req, res, next) => {
    Envelope.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        .then((result) => {
            res.render('index', { title: 'All Envelopes', envelopes: result })
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post('/envelopes', (req, res) => {
    const envelope = new Envelope(req.body);
    envelope.save()
        .then((result) => {
            res.redirect('/envelopes');
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/envelopes/add-envelope', (req, res, next) => {
    res.render('add-envelope', { title: 'Add Envelope' });
});


router.get('/envelopes/:id', (req, res) => {
    const id = req.params.id;
    Envelope.findById(id)
        .then(result => {
            res.render('details', { envelope: result, title: 'Envelope Details' });
        })
        .catch(err => {
            console.log(err);
        });
});

router.delete('/envelopes/:id', (req, res) => {
    const id = req.params.id;

    Envelope.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/envelopes' });
        })
        .catch(err => {
            console.log(err);
        });

});

module.exports = router;