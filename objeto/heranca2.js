const avo = { att1: 'A' };
const pai = { __proto__: avo, att2: 'B' };
const filho = { __proto__: pai, att3: 'C' };

// console.log(filho.att1);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km de ${this.velMax}Km`;
  }
};

const ferrari = {
  modelo: 'F40',
  velMax: 340 //shadowing
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}, ${super.status()}`;
  }
}


Object.setPrototypeOf(volvo, carro);
Object.setPrototypeOf(ferrari, carro);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(200);
console.log(ferrari.modelo + ',', ferrari.status());

for (i in ferrari) {
  console.log(i);
}