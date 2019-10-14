const produto = new Object();
produto.nome = 'cadeira';
produto['nome do produto'] = 'Generico';
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto['nome do produto'];

console.log(produto);
