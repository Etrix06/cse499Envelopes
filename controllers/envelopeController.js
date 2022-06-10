const { Envelope, Transaction } = require('../models/envelope');
//const Transaction = require('../models/transaction');



const envelope_index = (req, res) => {
    Envelope.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        .then((result) => {
            res.render('envelopes/index', { title: 'All Envelopes', envelopes: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

const transfer_index = (req, res) => {
    res.render('envelopes/transfer', { title: 'Transfers' });
}

const transaction_index = (req, res) => {
    //res.render('envelopes/transactions', { title: 'Transactions' });
    console.log('params id', req.params.id);
    Transaction.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        //.populate('category')
        .then((result) => {
            console.log(result);
            res.render('envelopes/transactions', { title: 'Transactions', transactions: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

const transaction_create_post = (req, res) => {
    //const id = req.params.id;
    console.log(req.params.id, 'this is req params id');

    const transaction = new Transaction(req.body);
    console.log(req.body, 'This was the req Body');
    transaction.save()
        .then((result) => {
            res.redirect('/envelopes');
        })
        .catch((err) => {
            console.log(err);
        });
}

const envelope_details = (req, res) => {
    console.log('req params id when entering envelope details', req.params.id);
    const id = req.params.id;
    Envelope.findById(id)
        .then(result => {
            res.status(404).render('envelopes/details', { envelope: result, title: 'Envelope Details' });
        })
        .catch(err => {
            res.render('404', { title: 'Envelope not found' });
        });
}

const envelope_create_get = (req, res) => {
    res.render('envelopes/add-envelope', { title: 'Add Envelope' });
}

const envelope_create_post = (req, res) => {
    const envelope = new Envelope(req.body);
    envelope.save()
        .then((result) => {
            res.redirect('/envelopes');
        })
        .catch((err) => {
            console.log(err);
        });
}

const envelope_delete = (req, res) => {
    const id = req.params.id;

    Envelope.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/envelopes' });
        })
        .catch(err => {
            console.log(err);
        });
}

module.exports = {
    envelope_index,
    transfer_index,
    transaction_index,
    transaction_create_post,
    envelope_details,
    envelope_create_get,
    envelope_create_post,
    envelope_delete
}