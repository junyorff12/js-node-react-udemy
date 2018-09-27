// par nome / valor

const saudacao = 'Opa'; // contexto lexico 1

function exec() {
    const saudacao = 'Heloo'; // contexto lexico 2
    return saudacao;
}

const cliente = {
    nome: 'jr',
    idade: 31,
    peso: 78,
    endereco: {
        logradouro: 'rua IS',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente['idade']);