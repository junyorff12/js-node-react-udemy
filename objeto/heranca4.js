function MeuObjeto() { }

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia meu nome é: ${this.nome}`);
}

obj1.falar();
obj2.nome = 'Josué';
obj2.falar();

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

Function.prototype.nome = 'Gerimun';
const ze = function () { }

console.log(ze.nome)