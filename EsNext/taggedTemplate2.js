function transformarEmReal(part, ...values) {
  const ArrayResult = [];
  values.forEach((v, i) => {
    v = isNaN(v) ? v : `R$${v.toFixed(2)}`;
    ArrayResult.push(part[i], v);
  });

  return ArrayResult.join('');
};

const p = 21.8;
const parcel = 11;

console.log(transformarEmReal`1x de ${p} ou 3x de ${parcel}`);