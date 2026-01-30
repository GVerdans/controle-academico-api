const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.port, () => {
  console.log(`http://localhost:${process.env.port}`);
});
