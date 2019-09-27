function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    return console.log(`Valor acima do premitido ${area}m2.`)
  }

  return area
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 55, 66, 77))
console.log(area(5, 5))