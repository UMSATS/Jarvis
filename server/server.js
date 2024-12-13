const express = require('express')
const { InfluxDB } = require('@influxdata/influxdb-client')
const app = require('./app')
const port = 5000
const { db_url, db_username, db_password } = require('./env')
const influxDB = new InfluxDB({ url: db_url, token: `${db_username}:${db_password}` })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
