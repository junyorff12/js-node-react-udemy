let valor; // não  inicializada
 
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);

const prod = {}
console.log(prod.preco);
console.log(prod);

prod.preco = 3.50;
console.log(prod); 
prod.preco = undefined;


console.log(!!prod.preco);
//delete prod.preco;
console.log(prod);

prod.preco = null
console.log(!!prod.preco);
console.log(prod);
