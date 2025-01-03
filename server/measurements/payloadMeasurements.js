const {InfluxDB, Point} = require('@influxdata/influxdb-client');
const {writeApi, queryApi, dbInstance} = require('../db/dbSingleton');
const { db_bucket } = require('../config/env');
const { logErrorMsgPrefix, logInfoMsgPrefix } = require('../utils/utils');
const { json } = require('express');

const payloadTags = 'Payload';
const wellsMeasurementsTag = 'well temperature';
const wellsMeasurementsField = 'temp';

async function wellsMeasurements(wellNum){
    const query = `from(bucket: "${db_bucket}")
        |> range(start: -1h)
        |> filter(fn: (r) => r["_measurement"] == "${wellsMeasurementsTag}")
        |> filter(fn: (r) => r["_field"] == "${wellsMeasurementsField}")
        |> filter(fn: (r) => r["host"] == "${payloadTags}")
        |> filter(fn: (r) => r["well"] == "${wellNum}")`;
    return new Promise((resolve, reject) => {
        let result = "";
        queryApi.queryRows(query, {
            next(row, tableMeta) {
                const o = tableMeta.toObject(row);
                result += JSON.stringify(o);
            },
            error(error) {
                console.error(logErrorMsgPrefix('Error querying wells measurements'), error);
                reject(error);
            },
            complete() {
                console.log(logInfoMsgPrefix('Wells measurements query completed'));
                console.log(result);
                resolve(result);
            }
        });
    });
}

module.exports = { wellsMeasurements, payloadTags };