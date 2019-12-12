const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');


const chinesas = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (f, fAtaul) => {
    return (f.salario > fAtaul.salario) ? f : fAtaul;
}


axios.get(url).then( resposta => {
    let funcionarios = resposta.data;
//console.log(funcionarios);

    const funcionario = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(funcionario);
});

