const moduloA = require('../../moduloA');
console.log(moduloA.ola);


const http = require('http');

http.createServer((req, res) => {
  res.write('Olá Mundo');
  res.end();
}).listen(3000);