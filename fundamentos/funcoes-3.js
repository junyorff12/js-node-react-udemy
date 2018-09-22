//Armazenando uma funcao em variaveis.
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(1, 2);

//Armazenando uma Arrow function em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(10,20));

// retorno implicito

const subtracao = (a ,b) => a - b;

console.log(subtracao(3,2));

const imprimir = a => a + 1;

console.log(imprimir(22));

