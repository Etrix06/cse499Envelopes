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

const add_funds_post = (req, res) => {
    const funds = req.body;
    console.log('funds is: ', funds.total);
    Envelope.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        .then((result) => {
            res.render('envelopes/distribute-funds', { title: 'Distribute Funds', total: funds.total, envelopes: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const distribute_funds_post = (req, res) => {
    console.log("test Id 1 is ", req.body.testId1);
    console.log("test id 2 was ", req.body.testId2);
    console.log("env Id 1 is ", req.body.id1);
    console.log("env id 2 was ", req.body.id2);
    const id1 = req.body.id1;
    const id2 = req.body.id2;
    const amount1 = req.body.testId1;
    const amount2 = req.body.testId2;
    const balance1 = req.body.balance1;
    const balance2 = req.body.balance2;

    const newAmount = Number(balance1) + Number(amount1);
    const newAmount2 = Number(balance2) + Number(amount2);
    const envelope = Envelope.findByIdAndUpdate({ _id: id1 }, { balance: newAmount }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            //res.redirect('/');
            console.log('Balance updated to ', newAmount);
            const envelope2 = Envelope.findByIdAndUpdate({ _id: id2 }, { balance: newAmount2 }, function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            })
            console.log('Balance updated to ', newAmount2);
        }
    })




    /*
    let balance = '';
    for (let i = 29; i < req.body.envelopes.length - 2; i++) {
        balance = balance + req.body.envelopes[i];
        //console.log(balance);
    }
    console.log('balance after the loop is ', balance);
    const numBalance = Number(balance);
    const numAmount = Number(req.body.amount);
    console.log('the numBalance after cast into num is ', numBalance);
    console.log('the numAmount after cast into num is ', numAmount);
    const funds = req.body.total - req.body.amount;
    let envelopeId = [];
    envelopeId = req.body.envelopes;
    let id = '';
    const newAmount = numBalance + numAmount;
    console.log(newAmount);
    for (let i = 2; i < 26; i++) {
        id = id + req.body.envelopes[i];
    }

    console.log('this is the balance', balance);
    console.log('this is the envelope id', envelopeId);
    console.log('the id', id);
    */

    /*
    const envelope = Envelope.findByIdAndUpdate({ _id: id }, { balance: newAmount }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("balance updated. I hope");
            res.redirect('/envelopes/add-funds');
        }
    })
    */


    //Envelope.findByIdAndUpdate(envelopeId, { balance: funds }, function(err, docs) {
    //    if (err) {
    //        console.log(err)
    //    } else {
    //        console.log("Updated Envelope balance : ", docs);
    //    }
    //})

    /*
    Envelope.find() // we can add the sort method at the end of find .sort({ createdAt: -1})   this makes newest added show first
        .then((result) => {
            res.render('envelopes/distribute-funds', { title: 'Distribute Funds', total: funds, envelopes: result });
        })
        .catch((err) => {
            console.log(err);
        })
        */
}

const transaction_create_post = (req, res) => {
    const id = req.body.id;
    const newAmount = req.body.balance - req.body.amount;

    const envelope = Envelope.findByIdAndUpdate({ _id: id }, { balance: newAmount }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
    console.log('remaining amount updated to ', newAmount);
}

const envelope_details = (req, res) => {
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
    add_funds_post,
    distribute_funds_post,
    transaction_create_post,
    envelope_details,
    envelope_create_get,
    envelope_create_post,
    envelope_delete
}