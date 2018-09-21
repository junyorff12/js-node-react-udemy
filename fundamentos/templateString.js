const nome = "JR";
const concatenacao = 'Olá ' + nome + '!';

const template = `
    Olá 
    ${nome}!`;

console.log(concatenacao, template);

// Expressoes

console.log(`1 + 1 = ${1 + 1}`);

//Usando Arrow Function

const q = texto => texto.toUpperCase();

console.log(`Ei....${q('Cuidado')}!`);