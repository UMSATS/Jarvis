const express = require('express');
const payloadController = require('../controllers/payloadController');

const router = express.Router();

/**
 * payloadRoutes.js
 * @brief This file contains the routes for the payload API
 */

// getting well temperature data
router.route('/wells/temp/:wellNum').get(payloadController.wellsTemperature);

module.exports = router;