//usando callbacks

const http = require('http');

function getTurma(letra) {
  let url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    let result = '';
    http.get(url, res => {
      res.on('data', data => {
        result += data;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(result));
        } catch (e) {
          reject(e);
        }
      })

    });
  })
};

let nomes = [];
// getTurma('A').then(alunos => {
//   nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`));
//   getTurma('B').then(alunos => {
//     nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`));
//     getTurma('C').then(alunos => {
//       nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`));
//       console.log(nomes);
//     })
//   })

// });


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
  .then(turmas => [].concat(...turmas))
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomes => console.log(nomes))