const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');

axios.get(url).then(res => {
  funcionarios = res.data;
  let chineseFuncionarioSalarioMaisAlto = funcionarios.filter(func => {
    return func.genero === 'F';
  }).filter(func => {
    return func.pais === 'China';
  }).reduce((func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual;
  })

  console.log(chineseFuncionarioSalarioMaisAlto);
});

