const express = require('express');
const envelopeController = require('../controllers/envelopeController');

const router = express.Router();

router.get('/', envelopeController.envelope_index);

router.post('/', envelopeController.envelope_create_post);

router.get('/add-envelope', envelopeController.envelope_create_get);

router.get('/transfer', envelopeController.transfer_index);

router.get('/transactions', envelopeController.transaction_index);

router.post('/add-transaction', envelopeController.transaction_create_post);

router.get('/:id', envelopeController.envelope_details);

router.delete('/:id', envelopeController.envelope_delete);



module.exports = router;