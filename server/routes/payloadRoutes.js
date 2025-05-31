const express = require('express');
const payloadController = require('../controllers/payloadController');

const router = express.Router();

/**
 * payloadRoutes.js
 * @brief This file contains the routes for the payload API
 */

/**
 * @brief This route is used to get the temperature data of a well
 * @param wellNum The well number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
router.route('/wells/temp/:wellNum').get(payloadController.wellsTemperature);

/**
 * @brief This route is used to get the luminosity data of a well
 * @param wellNum The well number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
router.route('/wells/lumin/:wellNum').get(payloadController.wellsLuminosity);

module.exports = router;