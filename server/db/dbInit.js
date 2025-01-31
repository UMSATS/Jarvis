const { writeApi, queryApi, dbInstance } = require('./dbSingleton');
const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const { db_url, db_adminToken, db_bucket, db_org } = require('../config/env');
const { payloadTags } = require('../measurements/payloadMeasurements');

/**
 * dbInit.js
 * @brief This file initializes the database with default values
 */

async function dbInit(dbInstance = null){
    
}

// depracted
async function wellsInit(writeApiInstance){
    try{
        writeApiInstance.useDefaultTags({host: payloadTags});
        for(i = 1; i <= 16; i++){
            const point = new Point('well temperature')
                .tag('well', i)
                .floatField('temp', 0)
                .timestamp(new Date());
            
            await writeApiInstance.writePoint(point);
        }
        await writeApiInstance.flush();
    } catch(error){
        console.error('Error initializing wells:', error);
    }
}

module.exports = dbInit;