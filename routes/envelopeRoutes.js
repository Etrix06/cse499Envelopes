const express = require('express');
const envelopeController = require('../controllers/envelopeController');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', authController.envelope_index);

router.post('/', envelopeController.envelope_create_post);

router.get('/add-envelope', envelopeController.envelope_create_get);

router.get('/:id', envelopeController.envelope_details);

router.delete('/:id', envelopeController.envelope_delete);

module.exports = router;