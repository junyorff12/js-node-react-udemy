const port = 3003;

const express = require('express');
const app = express();
const db = require('./produtos_db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); //toda requisição vinda do client = urlencoded, é parseada como obj

app.get('/produto', (req, res, next) => {
  res.send(db.getAllProdutos());
});

app.get('/produto/:id', (req, res, next) => {
  res.send(db.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
  const produto = db.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });

  res.send(produto);
});

app.put('/produtos/:id', (req, res, next) => {
  const produto = db.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco

  });

  res.send(produto);
});

app.delete('/produto/:id', (req, res, next) => {
  const produto = db.deleteProduto(req.params.id);
  res.send(produto);
})

app.listen(port, () => {
  console.log(`Servidor esta de pé na porta ${port}`);
})