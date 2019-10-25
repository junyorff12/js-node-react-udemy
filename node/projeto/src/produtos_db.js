const sequence = {
  _id: 1,
  get id() {
    return this._id++
  }
};

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function getProduto(id) {
  return produtos[id] || {};
}

function getAllProdutos() {
  return Object.values(produtos);
}

function deleteProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = { salvarProduto, getProduto, getAllProdutos, deleteProduto };