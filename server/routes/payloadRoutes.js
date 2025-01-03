const express = require('express');
const payloadController = require('../controllers/payloadController');

const router = express.Router();

router.route('/wells/temp/:wellNum').get(payloadController.wellsTemperature);

module.exports = router;