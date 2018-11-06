
const pessoa = {
    nome: "jrff12",
    idade: 31,
    peso: 84
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


Object.entries(pessoa).forEach(([chave, valor]) => { // usando destructuring e arrow
    console.log(`${chave}: ${valor}`);
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // determina se é mostrado no numa busca de key por exemplo
    writable: false, // determina se pode ser alterado
    value: '25/04/1987'
})

pessoa.dataNascimento = '01/01/2019';
console.log(pessoa.dataNascimento);



// Object.assign (ES6)
const destino = {a : 1};
const o1 = {b : 2};
const o2 = {c: 3, a: 4};

const newObj = Object.assign(destino, o1, o2);


Object.freeze(newObj);
newObj.c = 1234
console.log(newObj);

