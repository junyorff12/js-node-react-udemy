// Uma factory retorna uma nova instancia (novo obj)
module.exports = function () {
  return {
    valor: 1,
    inc() {
      return this.valor++;
    }
  }
}