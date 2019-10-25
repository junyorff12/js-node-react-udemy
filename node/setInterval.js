function imprimeHoraLocal() {
  let date = new Date();
  return date.toLocaleTimeString('pt-BR');
}

const timer = setInterval(() => {
  console.log(imprimeHoraLocal());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000)

setTimeout(() => {
  console.log('Hello World');
}, 6000)