const { logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix } = require('../utils/utils');
const angVelocityMeasurements = require('../measurements/adcsMeasurements');
const magFieldMeasurements = require('../measurements/adcsMeasurements');
/**
 * adcs.js
 * @brief This file contains the controller functions for the ADCS API
 */

const getMagFieldData = async (req, res) => {
    console.log(logInfoMsgPrefix('ADCS magnetic field check'), 'request_body:', req.body);
    const variant = req.params.variant;
    let { start, end } = req.query; // extract query parameters

    // check if variant is provided, shouldn't happen
    if (!variant) {
        console.log(logWarnMsgPrefix('Variant number not provided'));
        res.status(400).json({ error: 'Variant number not provided' });
        return;
    }

    // check if variant is valid
    if (variant < 1 || variant > 2) {
        console.log(logWarnMsgPrefix(`Invalid variant number provided: ${variant}`));
        res.status(400).json({ error: 'Invalid variant number provided, must be 1 or 2' });
        return;
    }

    // TODO: should be written into utils/utils.js
    // check if start and end are provided, if not, set them to null
    // time stamp format is in RFC3339 format, e.g. 2023-10-01T00:00:00Z
    if (!start || !end) {
        console.log(logWarnMsgPrefix('Start or end time not provided'));
        res.status(400).json({ error: 'Start and end time must be provided' });
        return;
    } else {
        // check if start and end are in valid RFC3339 format
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/; // RFC3339 format: YYYY-MM-DDTHH:MM:SSZ
        if (!dateRegex.test(start) || !dateRegex.test(end)) {
            console.log(logWarnMsgPrefix(`Invalid date format provided: start=${start}, end=${end}`));
            res.status(400).json({ error: 'Invalid date format provided, must be in RFC3339 format' });
            return;
        }
    
        // convert start and end to Date objects to validate
        const startDate = new Date(start);
        const endDate = new Date(end);
        // end date must be after start date
        if (endDate <= startDate) {
            console.log(logWarnMsgPrefix(`End date must be after start date: start=${start}, end=${end}`));
            res.status(400).json({ error: 'End date must be after start date' });
            return;
        }
    }

    try {
        const queryResult = await magFieldMeasurements.magFieldMeasurements(variant, start, end);
        
        const merged = {};

        queryResult.forEach(item => {
            const time = item._time;
            
            if (!merged[time]) {
                merged[time] = {
                variant: item.variant,
                timestamp: time,
                LSB: null,
                X: null,
                Y: null,
                Z: null
            };
        }

        const axis = item._field.toUpperCase();
        merged[time][axis] = item._value;
        
        });

        const finalOutput = Object.values(merged);
        console.log(logInfoMsgPrefix('ADCS magnetic field data fetched successfully'));

        res.status(200).json(finalOutput);

    } catch (error) {
        console.error(logErrorMsgPrefix('Error fetching ADCS magnetic field data'), error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getAngVelocityData = async (req, res) => {
    console.log(logInfoMsgPrefix('ADCS angular velocity check'), 'request_body:', req.body);
    const variant = req.params.variant;
    let { start, end } = req.query; // extract query parameters

    // check if variant is provided, shouldn't happen
    if (!variant) {
        console.log(logWarnMsgPrefix('Variant number not provided'));
        res.status(400).json({ error: 'Variant number not provided' });
        return;
    }

    // check if variant is valid
    if (variant < 1 || variant > 2) {
        console.log(logWarnMsgPrefix(`Invalid variant number provided: ${variant}`));
        res.status(400).json({ error: 'Invalid variant number provided, must be between 1 or 2' });
        return;
    }

    // TODO: should be written into utils/utils.js
    // check if start and end are provided, if not, set them to null
    // time stamp format is in RFC3339 format, e.g. 2023-10-01T00:00:00Z
    if (!start || !end) {
        console.log(logWarnMsgPrefix('Start or end time not provided'));
        res.status(400).json({ error: 'Start and end time must be provided' });
        return;
    } else {
        // check if start and end are in valid RFC3339 format
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/; // RFC3339 format: YYYY-MM-DDTHH:MM:SSZ
        if (!dateRegex.test(start) || !dateRegex.test(end)) {
            console.log(logWarnMsgPrefix(`Invalid date format provided: start=${start}, end=${end}`));
            res.status(400).json({ error: 'Invalid date format provided, must be in RFC3339 format' });
            return;
        }
    
        // convert start and end to Date objects to validate
        const startDate = new Date(start);
        const endDate = new Date(end);
        // end date must be after start date
        if (endDate <= startDate) {
            console.log(logWarnMsgPrefix(`End date must be after start date: start=${start}, end=${end}`));
            res.status(400).json({ error: 'End date must be after start date' });
            return;
        }
    }

    try {
        const queryResult = await angVelocityMeasurements.angVelocityMeasurements(variant, start, end);
        
        const merged = {};

        queryResult.forEach(item => {
            const time = item._time;

            if (!merged[time]) {
                merged[time] = {
                variant: item.variant,
                timestamp: time,
                X: null,
                Y: null,
                Z: null
            };
        }

        const axis = item._field.toUpperCase();
        merged[time][axis] = item._value;
       
        });

        const finalOutput = Object.values(merged);
        console.log(logInfoMsgPrefix('ADCS angular velocity data fetched successfully'));

        res.status(200).json(finalOutput);

    } catch (error) {
        console.error(logErrorMsgPrefix('Error fetching ADCS angular velocity data'), error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

/**
 * @brief This function is used to get the measurement of the magnetic field, the data is fetched from the database
 * @param variant The variant number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
exports.magFieldMeasurements = async (req, res) => getMagFieldData(req, res);

/**
 * @brief This function is used to get the measurement of the angular velocity, the data is fetched from the database
 * @param variant The variant number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
exports.angVelocityMeasurements = async (req, res) => getAngVelocityData(req, res);
