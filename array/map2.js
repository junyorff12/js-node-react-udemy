const carrinho = [
    '{"nome" : "Borracha", "preco" : 3.45}',
    '{"nome": "lapis", "preco": 13.90}',
    '{"nome": "Caderno", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
];

const res = carrinho.map(e => JSON.parse(e)).map(e => e.preco);
console.log(res);
