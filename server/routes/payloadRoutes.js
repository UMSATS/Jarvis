const express = require('express');
const payloadController = require('../controllers/payloadController');

const router = express.Router();

router.route('/wells/:wellNum/temp').get(payloadController.wellsTemperature);

module.exports = router;