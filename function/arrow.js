
//funcao literal
let dobro = function (a) {
    return 2 * a;
};

//funcao arrow literal
dobro = (a) => {
    return 2 * a;
}


//funcao arrow reduzida
dobro = a => 2 * a;

console.log(dobro(Math.PI));

let ola = () => 'Olá';
ola = _ => 'oláx';

console.log(ola());