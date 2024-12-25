const express = require('express')
const { InfluxDB } = require('@influxdata/influxdb-client')
const app = require('./app')
const { db_url, db_adminToken, api_port } = require('./env')
const influxDB = new InfluxDB({ url: db_url, token: db_adminToken })

app.listen(api_port, () => {
  console.log(`App listening on port ${api_port}`)
})

