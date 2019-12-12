const pessoa = {
    saudacao : 'bomdia',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar(); //chama saudacao
const falar = pessoa.falar;//n chama saudacao
falar();

const falarDePessoa = pessoa.falar.bind(pessoa); // o bind amarra o metodo no obj. = falarDEPessa.falar();
falarDePessoa();
 