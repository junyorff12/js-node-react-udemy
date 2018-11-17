const ferrari = {
    modelo: "F40",
    vMax: 200
}

const volvo = {
    modelo: "V40",
    vMax: 200
}

console.log(ferrari.__proto__);// {}
console.log(ferrari.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__ === null)// null

function MeuObjeto(){};
console.log(typeof Object, typeof MeuObjeto ); //function function
console.log(Object.prototype, MeuObjeto.prototype);
