const arr = [9.2, 10.1, 11.3, 2.5];

const res = arr.reduce((acc, atual) => {
  console.log(acc.toFixed(2), atual.toFixed(2));
  return acc + atual;
});

console.log(res.toFixed(2));