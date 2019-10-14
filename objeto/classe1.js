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
    this.lancamentos = [];
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push);
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor;
    })
  }
}