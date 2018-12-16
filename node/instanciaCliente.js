const instanciaA = require('./instanciaUnica');
const instanciaB = require('./instanciaUnica');

instanciaA.inc();
instanciaA.inc();

console.log(instanciaA.valor, instanciaB.valor);

instanciaC = require('./instanciaNova')();
instanciaD = require('./instanciaNova')();

instanciaC.inc();
instanciaC.inc();

console.log(instanciaC.valor, instanciaD.valor)