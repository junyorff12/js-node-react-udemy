const produtos = [
    {nome : 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}

];

let res = produtos.map(pro => pro.preco).reduce(function (acumulador, valorAtual){
    console.log(acumulador, valorAtual);
    return acumulador + valorAtual;
})

console.log(res);


    
