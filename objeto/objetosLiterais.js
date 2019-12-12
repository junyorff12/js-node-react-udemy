const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a, b, c}; // automaticamente a notacao literal IDENTIFICA que existem constantes com esses nomes e atribui, chvae: valor

console.log("Obj1 = ", obj1);
console.log("Obj2 = ", obj2);

// Criando objetos apartir de qqer variavel
const nomeAttr = 'nota';
const valorAttr = 7.87;

 const obj3 = {};
 obj3[nomeAttr] = valorAttr; // Usando variaveis pre criadas com chave: valor   

 console.log(obj3);

 const obj4 = {[nomeAttr] : valorAttr};

 console.log(obj4);

 const obj5 = {
     funcao1 = function (){
         //...
     },
     funcao2() {
         //...
     }
 };