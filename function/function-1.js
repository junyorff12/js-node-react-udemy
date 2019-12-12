//funcao literal
function fun1() {};

//armazenar em variavel
const fun2 = function() {};

//armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2];
console.log(array[0](2,3));

// armazenar em um atributo de objeto

const obj = {};
obj.falar = function () { return 'Opa.....'};
console.log(obj.falar());

// funcao que retorna/contem uma outra funcao

function soma (a, b) {
    return function (c) {
        console.log(a + b + c);
    };
};

soma(3,2)(4);

const soma2 = soma(2,4);
soma2(4);