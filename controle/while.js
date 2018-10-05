
function getNumeroInteiroEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getNumeroInteiroEntre(-1, 10);
    console.log(`A opcao escolhida foi ${opcao}`);
}

console.log('até a proxima');