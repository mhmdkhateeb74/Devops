const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'myweb', 'web.html'));
});

app.get('/second', (req, res) => {
  res.sendFile(path.join(__dirname, 'myweb', 'second.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});



