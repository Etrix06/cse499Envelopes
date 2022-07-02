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

    //envelope length
    const envelopesLength = req.body.envelopesLength[0];

    //loop to declare variables  experimental.

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
    const id11 = req.body.id11;
    const id12 = req.body.id12;
    const id13 = req.body.id13;
    const id14 = req.body.id14;
    const id15 = req.body.id15;
    const id16 = req.body.id16;
    const id17 = req.body.id17;
    const id18 = req.body.id18;
    const id19 = req.body.id19;
    const id20 = req.body.id20;

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
    const balance11 = req.body.balance11;
    const balance12 = req.body.balance12;
    const balance13 = req.body.balance13;
    const balance14 = req.body.balance14;
    const balance15 = req.body.balance15;
    const balance16 = req.body.balance16;
    const balance17 = req.body.balance17;
    const balance18 = req.body.balance18;
    const balance19 = req.body.balance19;
    const balance20 = req.body.balance20;

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
    const amount11 = req.body.testId11;
    const amount12 = req.body.testId12;
    const amount13 = req.body.testId13;
    const amount14 = req.body.testId14;
    const amount15 = req.body.testId15;
    const amount16 = req.body.testId16;
    const amount17 = req.body.testId17;
    const amount18 = req.body.testId18;
    const amount19 = req.body.testId19;
    const amount20 = req.body.testId20;

    const idArray = [id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11, id12, id13, id14, id15, id16, id17, id18, id19, id20];
    const balanceArray = [balance1, balance2, balance3, balance4, balance5, balance6, balance7, balance8, balance9, balance10, balance11, balance12, balance13, balance14, balance15, balance16, balance17, balance18, balance19, balance20];
    const amountArray = [amount1, amount2, amount3, amount4, amount5, amount6, amount7, amount8, amount9, amount10, amount11, amount12, amount13, amount14, amount15, amount16, amount17, amount18, amount19, amount20];



    for (let i = 0; i < envelopesLength; i++) {
        const newAmount = Number(balanceArray[i]) + Number(amountArray[i]);
        const envelope = Envelope.findByIdAndUpdate({ _id: idArray[i] }, { balance: newAmount }, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Balance of', i, 'updated to ', newAmount);
            }
        })
    }
    setTimeout(() => { res.redirect('/') }, 1500);
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