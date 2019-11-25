function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return 'Outra String';
}

const aluno = 'Gil';
const situaÇÃO = 'aPROVADO';
console.log(tag`${aluno} está ${situaÇÃO}`);