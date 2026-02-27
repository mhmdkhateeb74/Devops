const express = require('express');
const path = require('path');
const app = express();

const port = 8080;


app.use(express.static(path.join(__dirname, 'myweb')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'myweb', 'web.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});