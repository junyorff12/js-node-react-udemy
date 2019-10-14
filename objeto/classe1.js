class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome;
    this.valor = valor;
  }
}

class cicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.meusLancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(lancamento => {
      this.meusLancamentos.push(lancamento);
    })
  }

  sumario() {
    let valorConsolidado = 0;
    this.meusLancamentos.forEach(lancamento => {
      valorConsolidado += lancamento.valor;
    })

    return valorConsolidado
  }
}

const salario = new Lancamento('salario', 4500);
const contaLuz = new Lancamento('luz', -220);
const contas = new cicloFinanceiro(10, 2019);
contas.addLancamentos(salario, contaLuz);
console.log(contas.sumario());