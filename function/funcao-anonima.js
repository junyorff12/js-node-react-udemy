const soma = function (a, b) { 
    return a + b;
};

const imprimirResultado = function (a, b, result = soma) {
    console.log(result(a, b));
}

imprimirResultado(2, 3);
imprimirResultado(2, 3, soma);

imprimirResultado(3, 4, function (a, b){
    return a - b;
});

imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar : function () {
        console.log('Oi!!!');
    }
};

pessoa.falar();