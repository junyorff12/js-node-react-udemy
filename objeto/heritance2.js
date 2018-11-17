//prototpe chain


Object.prototype.attr0 = "z";
const avo = {attr1 : 'a'};
const pai = {__proto__: avo, attr2: "b"};
const filho = {__proto__: pai, attr3: "c"};

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual : 0,
    velMax : 200,
    acelerar(delta){
        if ((this.velAtual + delta) <= this.velMax){
            this.velAtual+= delta;
        }else {
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual} Km\h de ${this.velMax} Km\h`;
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadownig
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status( )}`; // super esta chamando o metodo do prototipo.
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());