// nov recurso do ES2015

const pessoa = {
    nome : 'Ana',
    idade : '5',
    endereco : {
        logradouro : 'Rua ABC',
        numero: 123
    }
};

const { nome, idade } = pessoa; // retirando nome , idade do objeto pessoa.
console.log(nome, idade);

const { nome:n, idade: i } = pessoa; // atribuind um aliás
console.log(n + "\n" + i);

const { sobrenoem, bemhumorada = true} = pessoa; // atribuindo um valor padrão
console.log(sobrenoem, bemhumorada);

const { endereco: {logradouro, numero, cep}} = pessoa // Objetos aninhados