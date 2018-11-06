// notação literal

const obj1 = {};
console.log(obj1);

//Object em JS
console.log(typeof Object);  // function
console.log(typeof new Object()); // Object

const obj2 = new Object;
console.log(obj2);

//funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('notebook', 2999, 0.25);

console.log(p1.getPrecoComDesconto().toFixed(2));
console.log(p2.getPrecoComDesconto().toFixed(2));

// funcao factory 

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario());

// Object.create

const filha = Object.create(null);
filha.nome = 'JRFF12';

console.log(filha);

//funcao famosa que retorna uma objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);