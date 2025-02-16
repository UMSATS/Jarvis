const express = require('express');
const {logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix} = require('./utils/utils');
const packageLock = require('./package-lock.json');
const { wellsMeasurements } = require('./measurements/payloadMeasurements');

// route imports, see ./routes folder
const payloadRouter = require('./routes/payloadRoutes');

const app = express();

/**
 * app.js
 * @brief This file contains the main routes for the API
 */

app.use(express.json());

app.post('/login', (req, res) => {

   console.log(logInfoMsgPrefix("Logging in user"), 'Request_body:', req.body);

   res.send('This is login validation logic');
});

app.post('/register', (req, res) => {

   console.log(logInfoMsgPrefix("Registering user"), 'Request_body:', req.body);

   const name = req.body.name;

   res.send('Hello ' + name + ' you are registered successfully');
});

// a health check route, mainly for monitoring purposes
app.get("/health", (req, res) => {

   console.log(logInfoMsgPrefix('API health check'), 'request_body:', req.body);

   const version = packageLock.version;

   res.status(200).json({
      name: 'api', 
      message: "API is up and running",
      status: 'pass',
      checks: [],
      version: version,
      timestamp: new Date().toISOString()
   });
});
  
// routes for each endpoint, see ./routes folder
app.use('/payload', payloadRouter);

module.exports = app;