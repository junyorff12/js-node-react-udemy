console.log(soma(1, 2));

// function declaration -> essa funcao pode ser carregada antes mesmo de exitir,
// o JS carrega todas as function do arquivo antes de executar o código.
function soma(a, b){
    return a + b;
};


// function expression
const sub = function (a, b) {
    return a - b;
};


//named function declaration
const multi = function multi(a, b) {
    return a * b;
}