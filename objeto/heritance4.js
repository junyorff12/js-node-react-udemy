function MeuObjeto(){};

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = "Anon";
MeuObjeto.prototype.falar = function (){
    console.log(`Bom dia meu nome é ${this.nome}`);
}

obj1.falar();
obj2.nome = "Rafael";
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // estou adicionando a referencia da funcao meu MeuObjeto, para uma constante criada sem o new 
obj3.nome = 'Obj3'; 
obj3.falar();

//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype); //true
console.log(MeuObjeto.prototype === Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype);//true
console.log(Object.prototype.__proto__);//null





