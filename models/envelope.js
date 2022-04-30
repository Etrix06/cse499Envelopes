const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const envelopeSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    budgeted: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Envelope = mongoose.model('Envelope', envelopeSchema);

module.exports = Envelope;