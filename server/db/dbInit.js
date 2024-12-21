const { InfluxDB } = require('@influxdata/influxdb-client')
const { db_url, db_username, db_password } = require('../env')

print('InfluxDB client created')