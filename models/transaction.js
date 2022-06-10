const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Envelope = require('../models/envelope');

const transactionSchema = new Schema({
    nameOfTransaction: {
        type: String,
        default: 'No Name Entered'
    },
    amount: {
        type: Number,
        required: [true, 'Please enter amount of transaction']
    },
    envelope: {
        category: [{
            envelopeID: { type: Schema.Types.ObjectId, required: true },
            ref: 'Envelope'
        }]

    }

}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;