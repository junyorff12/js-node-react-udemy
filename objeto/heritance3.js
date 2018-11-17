const pai = {nome: "jrff12", corCabelo: "preto"};

const filho1 = Object.create(pai);
filho1.corCabelo = "azul";

console.log(filho1);

const filha2 = Object.create(pai, {
    nome: { value: "jr", writable: false, enumerable: true}
});

console.log(filha2.nome);
filha2.nome = 'Carlo';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filho1));
console.log(Object.keys(filha2));

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança ${key}`)
}