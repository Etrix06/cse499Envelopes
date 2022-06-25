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

    const id1 = req.body.id1;
    const id2 = req.body.id2;
    const id3 = req.body.id3;
    const id4 = req.body.id4;
    const id5 = req.body.id5;
    const id6 = req.body.id6;
    const id7 = req.body.id7;
    const id8 = req.body.id8;
    const id9 = req.body.id9;
    const id10 = req.body.id10;

    const amount1 = req.body.testId1;
    const amount2 = req.body.testId2;
    const amount3 = req.body.testId3;
    const amount4 = req.body.testId4;
    const amount5 = req.body.testId5;
    const amount6 = req.body.testId6;
    const amount7 = req.body.testId7;
    const amount8 = req.body.testId8;
    const amount9 = req.body.testId9;
    const amount10 = req.body.testId10;

    const balance1 = req.body.balance1;
    const balance2 = req.body.balance2;
    const balance3 = req.body.balance3;
    const balance4 = req.body.balance4;
    const balance5 = req.body.balance5;
    const balance6 = req.body.balance6;
    const balance7 = req.body.balance7;
    const balance8 = req.body.balance8;
    const balance9 = req.body.balance9;
    const balance10 = req.body.balance10;


    const newAmount = Number(balance1) + Number(amount1);
    const newAmount2 = Number(balance2) + Number(amount2);
    const newAmount3 = Number(balance3) + Number(amount3);
    const newAmount4 = Number(balance4) + Number(amount4);
    const newAmount5 = Number(balance5) + Number(amount5);
    const newAmount6 = Number(balance6) + Number(amount6);
    const newAmount7 = Number(balance7) + Number(amount7);
    const newAmount8 = Number(balance8) + Number(amount8);
    const newAmount9 = Number(balance9) + Number(amount9);
    const newAmount10 = Number(balance10) + Number(amount10);

    const envelope = Envelope.findByIdAndUpdate({ _id: id1 }, { balance: newAmount }, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            //res.redirect('/');
            console.log('Balance updated to ', newAmount);

            const envelope2 = Envelope.findByIdAndUpdate({ _id: id2 }, { balance: newAmount2 }, function(err, result) {
                if (err) {
                    console.log(err);
                    res.redirect('/');
                } else {
                    const envelope3 = Envelope.findByIdAndUpdate({ _id: id3 }, { balance: newAmount3 }, function(err, result) {
                        if (err) {
                            console.log(err);
                            res.redirect('/');
                        } else {
                            const envelope4 = Envelope.findByIdAndUpdate({ _id: id4 }, { balance: newAmount4 }, function(err, result) {
                                if (err) {
                                    console.log(err);
                                    res.redirect('/');
                                } else {
                                    const envelope5 = Envelope.findByIdAndUpdate({ _id: id5 }, { balance: newAmount5 }, function(err, result) {
                                        if (err) {
                                            console.log(err);
                                            res.redirect('/');
                                        } else {
                                            const envelope6 = Envelope.findByIdAndUpdate({ _id: id6 }, { balance: newAmount6 }, function(err, result) {
                                                if (err) {
                                                    console.log(err);
                                                    res.redirect('/');
                                                } else {
                                                    const envelope7 = Envelope.findByIdAndUpdate({ _id: id7 }, { balance: newAmount7 }, function(err, result) {
                                                        if (err) {
                                                            console.log(err);
                                                            res.redirect('/');
                                                        } else {
                                                            const envelope8 = Envelope.findByIdAndUpdate({ _id: id8 }, { balance: newAmount8 }, function(err, result) {
                                                                if (err) {
                                                                    console.log(err);
                                                                    res.redirect('/');
                                                                } else {
                                                                    const envelope9 = Envelope.findByIdAndUpdate({ _id: id9 }, { balance: newAmount9 }, function(err, result) {
                                                                        if (err) {
                                                                            console.log(err);
                                                                            res.redirect('/');
                                                                        } else {
                                                                            const envelope10 = Envelope.findByIdAndUpdate({ _id: id10 }, { balance: newAmount10 }, function(err, result) {
                                                                                if (err) {
                                                                                    console.log(err);
                                                                                    res.redirect('/');
                                                                                } else {
                                                                                    res.redirect('/');
                                                                                }
                                                                            })
                                                                            console.log('Balance updated to ', newAmount10);
                                                                        }
                                                                    })
                                                                    console.log('Balance updated to ', newAmount9);
                                                                }
                                                            })
                                                            console.log('Balance updated to ', newAmount8);
                                                        }
                                                    })
                                                    console.log('Balance updated to ', newAmount7);
                                                }
                                            })
                                            console.log('Balance updated to ', newAmount6);
                                        }
                                    })
                                    console.log('Balance updated to ', newAmount5);
                                }
                            })
                            console.log('Balance updated to ', newAmount4);
                        }
                    })
                    console.log('Balance updated to ', newAmount3);
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