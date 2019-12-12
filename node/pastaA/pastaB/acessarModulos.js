const moduloA = require('../../moduloA'); // sempre respeitar Case Sensitive

console.log(moduloA.ola);

const saudacao = require('saudacao');

console.log(saudacao.ola);

const c = require('./pastaC');
console.log(c.ola2);

const http = require('http');

// http.createServer((req, res) => {
//     res.write('Ola requisição');
//     res.end();
// }).listen(8080);