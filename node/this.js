
console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis(){
    console.log('Dentro de uma função.');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global) // dentro de uma função this aponta pra global
}

logThis(); // Dentro deuma funcção this não aponta para exports nem module.exports.