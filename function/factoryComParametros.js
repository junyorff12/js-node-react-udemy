function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1,
        valorComDesconto: (preco - (preco * 0.1)).toFixed(2),
     
    };
};

const notebook = criarProduto('notebook', 2199.99);
console.log(notebook);