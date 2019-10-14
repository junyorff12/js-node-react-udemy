const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
});

console.log(filha2.nome);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (key in filha1) {
  filha1.hasOwnProperty(key) ?
    console.log(`É sua: ${key}`) : console.log(`Por herança: ${key}`);
}
