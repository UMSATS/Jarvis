const express = require('express')
const { InfluxDB } = require('@influxdata/influxdb-client')
const app = require('./app')
const port = 5000
const { db_url, db_username, db_password, db_adminToken } = require('./env')
const influxDB = new InfluxDB({ url: db_url, token: db_adminToken })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
