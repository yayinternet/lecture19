const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Main page!');
});

app.get('/hello', function (req, res) {
  const queryParams = req.query;
  console.log(queryParams);
  const name = req.query.name;
  res.send('Hello, ' + name);
});

app.post('/hello', function (req, res) {
  const queryParams = req.query;
  console.log(queryParams);
  const name = req.query.name;
  res.send('POST Hello, ' + name);
});

app.listen(3000, function () {
  console.log('Routed app listening on port 3000!');
});
