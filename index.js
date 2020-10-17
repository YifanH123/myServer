const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/random', (req, res) => {
  res.send('something else');
})

app.get('/number1', (req, res) => {
  res.send('1');
})

app.get('/number2', (req, res) => {
  res.send('2');
})

app.get('/number3', (req, res) => {
  res.send('<button onclick="location.href='http://www.desmos.com'"; type="button">3</button>');
})

app.get('/button', (req, res) => {
  res.send('<button style="position:absolute; left: 50%; top: 50%">hi</button>');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
