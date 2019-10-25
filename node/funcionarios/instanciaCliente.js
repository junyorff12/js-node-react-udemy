const contadorA = require('./instaciaUnica.js');
const contadorB = require('./instaciaUnica.js');

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);


const contadorC = require('./instanciaNova.js')();
const contadorD = require('./instanciaNova.js')(); //tenho que executar pois é factory

contadorC.inc();
contadorC.inc();

console.log(contadorC.valor, contadorD.valor);
