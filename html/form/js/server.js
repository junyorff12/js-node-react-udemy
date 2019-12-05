'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuario', (req, res) => {
  console.log(req.body);
  res.send('<h1>Parabens!!!Incluido!!!!</h1>');
});

app.post('/usuario/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send('<h1>Alterado com sucesso!!!!!</h1>');
})

app.listen(3030);

