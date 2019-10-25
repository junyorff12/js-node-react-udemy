const fs = require('fs');

const produto = {
  nome: 'p1',
  preco: 1250,
  total: 25
};

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err) => {
  console.log(err || 'Arquivo Salvo!');
})

