const {queryApi} = require('../db/dbSingleton');
const { db_bucket } = require('../config/env');
const { logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix } = require('../utils/utils');

/**
 * adcsMeasurements.js
 * @brief This file contains the functions to fetch ADCS related measurements
 */

// Tag for the ADCS
const adcsTags = 'ADCS';
// Tag for the magnetic field measurements
const magFieldMeasurementsTag = 'magField';
// fields for the magnetic field measurements
const magFieldMeasurementsFields = {
    LSB: 'LSB',
    X: 'X',
    Y: 'Y',
    Z: 'Z'
};
// Tag for the angular velocity measurements
const angVelocityMeasurementsTag = 'angVelocity';
// fields for the angular velocity measurements
const angVelocityMeasurementsFields = {
    X: 'X',
    Y: 'Y',
    Z: 'Z'
};

async function magFieldMeasurements(variant_num, start, end) {
    const query = `from(bucket: "${db_bucket}")
        |> range(start: ${start}, stop: ${end})
        |> filter(fn: (r) => r["_measurement"] == "${magFieldMeasurementsTag}")
        |> filter(fn: (r) => r["host"] == "${adcsTags}")
        |> filter(fn: (r) => r["variant"] == "${variant_num}")
        |> keep(columns: ["_time", "_value", "variant", _field])
        |> group(columns: ["_time])`;

    return new Promise((resolve, reject) => {
        let result = [];
        queryApi.queryRows(query, {
            next(row, tableMeta) {
                const o = tableMeta.toObject(row);
                result.push(o);
            },
            error(error) {
                reject(error);
            },
            complete() {
                resolve(result);
            }
        });
    });
}

async function angVelocityMeasurements(variant_num, start, end) {
    const query = `from(bucket: "${db_bucket}")
        |> range(start: ${start}, stop: ${end})
        |> filter(fn: (r) => r["_measurement"] == "${angVelocityMeasurementsTag}")
        |> filter(fn: (r) => r["host"] == "${adcsTags}")
        |> filter(fn: (r) => r["variant"] == "${variant_num}")
        |> keep(columns: ["_time", "_value", "variant", _field])
        |> group(columns: ["_time])`;
    
    return new Promise((resolve, reject) => {
        let result = [];
        queryApi.queryRows(query, {
            next(row, tableMeta) {
                const o = tableMeta.toObject(row);
                result.push(o);
            },
            error(error) {
                reject(error);
            },
            complete() {
                resolve(result);
            }
        })
    })
}

module.exports = {
    magFieldMeasurements,
    angVelocityMeasurements,
    adcsTags,
    magFieldMeasurementsTag,
    magFieldMeasurementsFields,
    angVelocityMeasurementsTag,
    angVelocityMeasurementsFields
};