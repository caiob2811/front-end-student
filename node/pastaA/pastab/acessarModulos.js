const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const pastaC = require('./pastaC/index.js') //pode importar '/.pastaC' sem referenciar o index
console.log(pastaC.legal)

 const https = require('http')
https.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) 