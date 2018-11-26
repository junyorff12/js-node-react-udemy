Array.prototype.reduce2 = function(callback, valorIncial) {
    const indiceInical = valorIncial ? 0 : 1;
    let acumulador = valorIncial || this[0];
   
    for (let i = indiceInical; i < this.length ; i++ ) {
      acumulador = callback(acumulador, this[i], i, this);
    }
   
    return acumulador;
   
  }
   
  const mult = (total, valor) => total * valor;
  const nums = [1, 2, 3, 4, 5];
   
  const resultado = nums.reduce2(mult); // (OK) Espera 120, obteve 120
  const resultado2 = nums.reduce2(mult, 2); // (OK) Espera 240, obteve 240
  const resultado3 = nums.reduce2(mult, 0); // (ERRO) Espera 0, obteve 120
  console.log(resultado, resultado2, resultado3);