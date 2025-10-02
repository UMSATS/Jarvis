const express  = require('express');
const adcsController = require('../controllers/adcsController');

const router = express.Router();

/**
 * adcsRoutes.js
 * @brief This file contains the routes for the ADCS API
 */

/**
 * @brief This route is used to get the magnetic field data of a variant
 * @param variant The variant number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
router.route('/magf/:variant').get(adcsController.magFieldMeasurements);

/**
 * @brief This route is used to get the angular velocity data of a variant
 * @param variant The variant number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
router.route('/angv/:variant').get(adcsController.angVelocityMeasurements);

module.exports = router;