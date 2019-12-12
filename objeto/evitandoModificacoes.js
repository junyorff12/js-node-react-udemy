
//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tg: 'promocao'
});

console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Bochacha branca';
delete produto.tg;
console.log(produto);

//Object.seal

const pessoa = {nome: 'JRFF12', idade: 31};
Object.seal(pessoa);

console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 32;
console.log(pessoa);

Object.freeze //Objeto totalmente selado;


