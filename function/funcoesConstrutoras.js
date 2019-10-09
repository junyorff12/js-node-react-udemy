function Carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0;

  this.acelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual = velocidadeAtual + delta;
      return;
    }
    velocidadeAtual = velocidadeMaxima;
  };

  this.getVelocidadeAtual = function() {
    return velocidadeAtual;
  };
}

let uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

let ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();

console.log(ferrari.getVelocidadeAtual());
