try {
  const pessoa = { nome: 'jao' };
  pessoa.nome = 'edi';

  pessoa = { nome: 'rap' };
} catch (e) {
  console.log(e.message, e.name);
} finally {
  throw 'Vc esta tentando vincular um nome objeto a uma constante';
}
