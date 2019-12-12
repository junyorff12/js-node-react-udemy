const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
];

//imperativo 

let total1 = 0;
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

//declarativo

 const alunosNotas = aluno => aluno.nota;
 const soma = (total, atual) => total + atual;
 const total2 = alunos.map(alunosNotas).reduce(soma);
 console.log(total2 / alunos.length);