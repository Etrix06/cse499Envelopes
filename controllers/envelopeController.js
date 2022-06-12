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

const add_funds_get = (req, res) => {
    res.render('envelopes/add-funds', { title: 'Add Funds' });

}

const transaction_create_post = (req, res) => {
    console.log(req.body.id, 'This is the envelope id,  I hope.')
    console.log(req.body.balance, 'This was the req Body.balance');
    console.log(req.body.budgeted, 'This was the req Body.budgeted');
    console.log(req.body.amount, 'This was the req Body.amount');
    const id = req.body.id;
    const newAmount = req.body.balance - req.body.amount;
    console.log(newAmount);
    const envelope = Envelope.findByIdAndUpdate({ _id: id }, { balance: newAmount }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
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
    console.log('This is from envelope_create_post', req.body);
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
    add_funds_get,
    transaction_create_post,
    envelope_details,
    envelope_create_get,
    envelope_create_post,
    envelope_delete
}