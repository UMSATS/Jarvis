const express = require('express');

const app = express();

app.use(express.json());


app.post('/login', (req, res) => {
   res.send('This is login validation logic');
   });

app.post('/register', (req, res) => {

   console.log('Request body', req.body);

   const name = req.body.name;

   res.send('Hello ' + name + ' you are registered successfully');
   });


   
module.exports = app;