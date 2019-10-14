function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const produto1 = new Produto('Cadeira', 7.99, 0.15);
console.log(produto1.getPrecoComDesconto().toFixed(2));

function criarFuncionario(name, salarioBase, faltas) {
  return {
    name,
    salarioBase,
    faltas,
    getSalario() {
      return salarioBase / 30 * (30 - faltas);
    }
  };
}

const f1 = criarFuncionario('jrff12', 5000, 1);
console.log(f1.getSalario());

const fromJSON = JSON.parse('{"info": "sou um JSON"}');
console.log(fromJSON.info);
