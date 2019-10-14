const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gusravo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }],
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}]

//forma 1
const a = []
const notas1 = escola.map(turma => {
  return turma.alunos.map(aluno => {
    return a.push(aluno.nota);
  });
});

//forma 2
const b = [];

escola.map(turma => turma.alunos.map(aluno => b.push(aluno.nota)));

//forma COD3R
const getNotasAlunos = aluno => aluno.nota;
const getNotasTurma = turma => turma.alunos.map(getNotasAlunos);
const notas2 = escola.map(getNotasTurma);

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
}

notas3 = escola.flatMap(turma => turma.alunos.map(aluno => aluno.nota));

console.log(a);
console.log(notas2);
console.log(b);
console.log(notas3);

