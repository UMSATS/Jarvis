const {InfluxDB, Point} = require('@influxdata/influxdb-client');
const {writeApi, queryApi, dbInstance} = require('../db/dbSingleton');
const { db_bucket } = require('../config/env');
const { logErrorMsgPrefix, logInfoMsgPrefix } = require('../utils/utils');
const { json } = require('express');

/**
 * payloadMeasurements.js
 * @brief This file contains the functions to fetch payload related measurements
 */

// Tag for the payload
const payloadTags = 'Payload';
// Tag for the wells measurements
const wellsMeasurementsTag = 'well';
// Fields for the wells measurements
const wellsMeasurementsFields = {
    temperature: 'temp',
    luminosity: 'lumin'
}

async function wellsMeasurements(wellNum, period, field) {
    const query = `from(bucket: "${db_bucket}")
        |> range(start: -${period})
        |> filter(fn: (r) => r["_measurement"] == "${wellsMeasurementsTag}")
        |> filter(fn: (r) => r["_field"] == "${field}")
        |> filter(fn: (r) => r["host"] == "${payloadTags}")
        |> filter(fn: (r) => r["well"] == "${wellNum}")
        |> keep(columns: ["_time", "_value", "well"])`;
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

module.exports = { wellsMeasurements, payloadTags, wellsMeasurementsTag, wellsMeasurementsFields };