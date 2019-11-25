const funcionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...funcionario } //spread -> espalhar

//spread com Arrays

const grupoA = ['joao', 'pedro', 'maria'];
const grupoFinal = ['rafa', ...grupoA, 'arthur'];
console.log(grupoFinal);