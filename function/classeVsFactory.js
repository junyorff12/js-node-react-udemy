class Pessoa {
    constructor (nome) {
        this.nome = nome;
    };

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    };
};

p1 = new Pessoa('Jrff12');
p1.falar();

//Usando funcao

const criarPessoa = (nome) => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
};
const p2 = criarPessoa('JRFF!@');
p2.falar();