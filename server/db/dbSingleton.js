const {InfluxDB} = require('@influxdata/influxdb-client');
const { db_url, db_adminToken, db_org, db_bucket} = require('../config/env');

const dbInstance = new InfluxDB({url: db_url, token: db_adminToken});

const writeApi = dbInstance.getWriteApi(db_org, db_bucket);
const queryApi = dbInstance.getQueryApi(db_org);

module.exports = {writeApi, queryApi, dbInstance};