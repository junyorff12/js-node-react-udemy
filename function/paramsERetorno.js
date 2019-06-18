function area(largura, altura) {
    area = altura * largura
    if(area > 20 ) {
        return console.log(`area maior que 20, ${area}m2`)
    }

    return area;
}

console.log(area(2,20))
console.log(area(2,1))
console.log(area())
console.log(area(5,5))