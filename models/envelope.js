const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const envelopeSchema = new Schema({
    category: {
        type: String,
        required: [true, 'Please enter envelope name']
    },
    budgeted: {
        type: Number,
        required: [true, 'Please enter amount to be budgeted']
    },
    balance: {
        type: Number,
        required: [true, 'Please enter amount left in envelope, usually the same as budgeted amount']
    }
}, { timestamps: true });

const Envelope = mongoose.model('Envelope', envelopeSchema);

module.exports = Envelope;