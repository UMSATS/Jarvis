const {InfluxDB} = require('@influxdata/influxdb-client')
const { db_url, db_adminToken, db_bucket, db_org } = require('../config/env')
const { logInfoMsgPrefix, logErrorMsgPrefix } = require('../utils/utils')

const instance = new InfluxDB({url: db_url, token: db_adminToken})

module.exports = instance