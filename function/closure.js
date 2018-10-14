const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro(){
        return x;
    };

    return dentro;
};

const minhafuncao = fora();

console.log(minhafuncao());