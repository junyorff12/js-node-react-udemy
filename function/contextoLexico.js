const valor = 'Global';

// A função lembra do context onde foi declarada, por isso ela procura a varial Global

function retornaValor() {
  console.log(valor);
}

function exec() {
  const valor = 'Local';
  retornaValor();
}

exec();
