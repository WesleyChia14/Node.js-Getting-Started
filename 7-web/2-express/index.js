const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('hello express');
});

server.get('/about', (req, res) => {
  res.send('hello about');
});

server.listen(4242, () => {
  console.log('Express Server is running...');
});
