const fabricantes = ['Mercedes', 'Audi', 'Bmw'];

fabricantes.forEach((fabricante) => console.log(fabricante)); // meu exemplo com arrow  function

const imprimir = function (marca, indice){
    return console.log(`${indice + 1}. ${marca}`);
};

fabricantes.forEach(imprimir);
fabricantes.forEach(function (a){
    console.log(a);
})

