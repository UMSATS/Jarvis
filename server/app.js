const express = require('express');

const app = express();

app.use(express.json());


app.post('/login', (req, res) => {

   console.log('Request body', req.body);

   res.send('This is login validation logic');
});

app.post('/register', (req, res) => {

   console.log('Request body', req.body);

   const name = req.body.name;

   res.send('Hello ' + name + ' you are registered successfully');
});

app.get("/health", (req, res) => {

   console.log('health check');

   res.status(200).json({
      name: 'api', 
      message: "API is up and running",
      status: 'pass',
      checks: [],
      version: '0.1', //TODO: need to read from somewhere
      timestamp: new Date().toISOString()
   });
});
   
module.exports = app;