let promise = new Promise((resolve, reject) => {
  let resultado = true;
  const tempo = 2000;
  setTimeout(() => {
    if (resultado) {
      resolve('[Tudo certo]');
    } else {
      reject('[Tudo errado]');
    }
  }, tempo);

})

promise
  .then(data => {
    console.log(`Dados resolvidos ${data}`)
    return data;
  })
  .then(data => console.log(`Dados resolvidos 2 ${data}`))
  .catch(data => console.log(`Erro ${data}`));


console.log('Fui executado Antes');