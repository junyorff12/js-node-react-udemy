function criarItens() {
  return {
    marca  : arguments[0],
    modelo : arguments[1],
    ano    : arguments[2]
  };
}

let carro = new criarItens('Wolks', 'Onix', 2019);

console.log(carro);
