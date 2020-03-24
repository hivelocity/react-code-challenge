const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

require('dotenv/config');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-API-KEY');
  next();
});

app.get('/', async (req, res) => {
  const options = {
    url: 'https://core.hivelocity.net/api/v2/device/',
    headers: {
      'X-API-KEY': process.env.API_KEY,
      Accept: 'application/json',
    },
    json: true,
  }

  request(options,  (error, response, body) => {
    if (error) return console.log(error);
    res.send(body);
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

