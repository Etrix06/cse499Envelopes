const express = require('express');
const envelopeController = require('../controllers/envelopeController');

const router = express.Router();

router.get('/', envelopeController.envelope_index);

router.post('/', envelopeController.envelope_create_post);

router.get('/add-envelope', envelopeController.envelope_create_get);

router.get('/:id', envelopeController.envelope_details);

router.delete('/:id', envelopeController.envelope_delete);

module.exports = router;