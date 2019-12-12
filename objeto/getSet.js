
const sequencia = {
    _valor : 1,
    get valor() { return this._valor++}, // o get e o set faz com que possa acesar o atributo _valor, atraves do valor. 
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }

}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);