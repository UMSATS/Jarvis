const express = require('express');
const {logInfoMsgPrefix, logWarnMsgPrefix, logErrorMsgPrefix} = require('./utils/utils');
const packageLock = require('./package-lock.json');
const { wellsMeasurements } = require('./measurements/payloadMeasurements');

const payloadRouter = require('./routes/payloadRoutes');

const app = express();

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
  
app.use('/payload', payloadRouter);

module.exports = app;