function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
};

const aula1 = new Aula('Bem vindo.', 123);
const aula2 = new Aula('Até breve.', 456);

console.log(aula1, aula2);

const rev = aula1.nome.split('').reverse().join('');

console.log(rev);

// simulando o new 

function novo(funcao, ...params) {
    const obj = {};
    obj.__proto__ = funcao.prototype;
    funcao.apply(obj, params); //executa a funcao passada com esse parametros
    return obj;   
}

const aula3 = novo(Aula, 'Bem vindo.', 123);
const aula4 = novo(Aula, 'Até breve.', 456);

console.log(aula3, aula4);