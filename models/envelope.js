const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const Transaction = require('../models/transaction');

const envelopeSchema = new Schema({
    category: {
        type: String,
        required: [true, 'Please enter envelope name'],
        unique: [true, 'This envelope already exists']
    },
    budgeted: {
        type: Number,
        required: [true, 'Please enter amount to be budgeted']
    },
    balance: {
        type: Number,
        required: [true, 'Please enter amount left in envelope, usually the same as budgeted amount']
    },
    transactions: [{
        name: { type: String, default: "" },
        amount: { type: Number, default: 0 }

    }]
}, { timestamps: true });

const transactionSchema = new Schema({
    nameOfTransaction: {
        type: String,
        default: 'No Name Entered'
    },
    amount: {
        type: Number,
        required: [true, 'Please enter amount of transaction']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Envelope"
    }

}, { timestamps: true });


const Envelope = mongoose.model('Envelope', envelopeSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

//module.exports = Envelope;
//module.exports = Transaction;
module.exports = {
    Envelope,
    Transaction,

}