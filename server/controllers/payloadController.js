const wellsMeasurements = require('../measurements/payloadMeasurements');
const { logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix } = require('../utils/utils');

/**
 * payloadController.js
 * @brief This file contains the controller functions for the payload API
 */

/**
 * @brief This function is used to get the data of a well, the data is fetched from the database
 * @param wellNum The well number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 * @param field The field to fetch (temperature or luminosity)
 */
const getWellData = async (req, res, field) => {
    console.log(logInfoMsgPrefix(`Payload wells ${field} check`), 'request_body:', req.body);
    const wellNum = req.params.wellNum;
    var { start, end } = req.query; // extract query parameters

    // check if well number is provided, shouldn't happen
    if (!wellNum) {
        console.log(logWarnMsgPrefix('Well number not provided'));
        res.status(400).json({ error: 'Well number not provided' });
        return;
    }

    // check if well number is valid
    if (wellNum < 1 || wellNum > 16) {
        console.log(logWarnMsgPrefix(`Invalid well number provided: ${wellNum}`));
        res.status(400).json({ error: 'Invalid well number provided, must be between 1 and 16' });
        return;
    }

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
        const queryResult = await wellsMeasurements.wellsMeasurements(wellNum, start, end, wellsMeasurements.wellsMeasurementsFields[field]);

        const formattedResult = queryResult.map(item => ({
            well: item.well,
            timestamp: item._time,
            [field]: item._value
        }));
            
        res.status(200).json(formattedResult);
        console.log(logInfoMsgPrefix(`Well ${field} data fetched successfully: ${wellNum}`));
    } catch (error) {
        console.log(logErrorMsgPrefix(`Error in fetching well ${field} data, ${error}`));
        res.status(500);
    }
};

/**
 * @brief This function is used to get the temperature data of a well, the data is fetched from the database
 * @param wellNum The well number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
exports.wellsTemperature = (req, res) => getWellData(req, res, 'temperature');

/**
 * @brief This function is used to get the luminosity data of a well, the data is fetched from the database
 * @param wellNum The well number
 * @query start The start time of the period to get the data
 * @query end The end time of the period to get the data
 */
exports.wellsLuminosity = (req, res) => getWellData(req, res, 'luminosity');
