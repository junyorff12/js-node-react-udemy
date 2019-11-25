for (let letra of 'Junyorff12') {
  console.log(letra);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]

]);

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor);
}