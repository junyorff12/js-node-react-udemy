const prod1 = {}

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40;

console.log(prod1);

const prod2 = {
    nome : "camisa polo",
    preco : 79.90,
    obj : {
        bla : 1,
        obj : {
            bla : 2,
        }
    }
}
prod2['Desconto legal'] = 0.4;
console.log(prod2);

