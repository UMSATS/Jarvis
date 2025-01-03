const express = require('express');
const wellsMeasurements = require('../measurements/payloadMeasurements');
const { logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix } = require('../utils/utils');

/**
 * payloadController.js
 * @brief This file contains the controller functions for the payload API
 */

// getting well temperature data
exports.wellsTemperature = async (req, res) => {
    console.log(logInfoMsgPrefix('Payload wells temperature check'), 'request_body:', req.body);
    const wellNum = req.params.wellNum;

    // check if well number is provided, shouldn't happen
    if(!wellNum){
        console.log(logWarnMsgPrefix('Well number not provided'));
        res.status(400).json({error: 'Well number not provided'});
        return;
    }

    // check if well number is valid
    if(wellNum < 1 || wellNum > 16){
        console.log(logWarnMsgPrefix(`Invalid well number provided: ${wellNum}`));
        res.status(400).json({error: 'Invalid well number provided, must be between 1 and 16'});
        return;
    }

    try {
        const queryResult = await wellsMeasurements.wellsMeasurements(wellNum);

        const formattedResult = queryResult.map(item => ({
            well: item.well,
            timestamp: item._time,
            temperature: item._value
        }));

        res.status(200).json(formattedResult);
        console.log(logInfoMsgPrefix(`Well temperature data fetched successfully: ${wellNum}`));
    } catch (error) {
        console.log(logErrorMsgPrefix(`Error in fetching well temperature data, ${error}`));
        res.status(500);
    }
};
