function tratarErro(erro) {
    throw new Error('Houve um erro!');
}


function gritarNome(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!!!');
    } catch (e) {
        tratarErro(e);
    } finally {
        console.log('final');
    }
}

const obj = {nome: 'jrff112'};

gritarNome(obj);