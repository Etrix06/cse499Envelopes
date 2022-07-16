const express = require('express');
const envelopeController = require('../controllers/envelopeController');

const router = express.Router();

router.get('/', envelopeController.envelope_index);

router.post('/', envelopeController.envelope_create_post);

router.get('/add-envelope', envelopeController.envelope_create_get);

router.get('/add-funds', envelopeController.add_funds_get);

router.post('/add-funds', envelopeController.add_funds_post);

router.post('/distribute-funds', envelopeController.distribute_funds_post);

router.get('/transactions', envelopeController.transaction_index);

router.post('/add-transaction', envelopeController.transaction_create_post);

router.get('/transfer/:id', envelopeController.envelope_transfer_get);

router.post('/transfer-funds/:id', envelopeController.envelope_transfer_post);

router.post('/edit/envelope/:id', envelopeController.envelope_edit_post);

router.get('/edit/:id', envelopeController.envelope_edit_get);

router.get('/:id', envelopeController.envelope_details);

router.delete('/:id', envelopeController.envelope_delete);





module.exports = router;