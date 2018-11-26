const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

//todos sao bolsistas?
// resposta minha
let res = alunos.map(a => a.bolsista).reduce( (acu) => acu == true);
console.log(res + " : resposta 1");

// resposta 

const todosBolsista = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista) + " : resposta 2"); 

// alguns é bolsista

const algunBolsista = (res, bol) => res || bol;
console.log(alunos.map(a => a.bolsista).reduce(algunBolsista) + " : resposta 3");