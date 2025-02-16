const express = require('express');
const { InfluxDB } = require('@influxdata/influxdb-client');
const app = require('./app');
const { db_url, db_adminToken, api_port } = require('./config/env');
const dbInit = require('./db/dbInit');
const influxDB = new InfluxDB({ url: db_url, token: db_adminToken });

/**
 * server.js
 * @brief This file initializes the database and starts the server
 */

dbInit(influxDB)
  .then(() => {
    app.listen(api_port, () => {
      console.log(`Server listening on port ${api_port}`);
    });
  })
  .catch((error) => {
    console.error('Error initializing database:', error);
  });