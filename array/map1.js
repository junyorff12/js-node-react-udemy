// O map gera um novo array

const nums = [1,2,3,4,5];

const res = nums.map(e => {return e *2} );

console.log(res);

const soma10 = e => e + 10;
const tripo = e => e * 3;
const paraDindin = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

const resultado = nums.map(soma10).map(tripo).map(paraDindin);
console.log(resultado);