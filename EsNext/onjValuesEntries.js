const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

const nome = 'Carla';
const pessoa = {
  nome,
  ola() {
    return 'Olá gente';
  }
};

console.log(pessoa.nome);

//class
class animal { };
class cachorro extends animal {
  falar() {
    return 'Au au';
  };
};

console.log(new cachorro().falar());
