let promise = new Promise((resolve, reject) => {
  throw new Error('Algo Errado');
  resolve('Ok');
});

promise
  .then(data => console.log(`Sucesso: ${data}`))
  .catch(data => console.log(`Falha: ${data}`))