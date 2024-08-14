const _ = require('lodash') // aqui ele quer carregar o pacote lodash 
setInterval(() => console.log(_.random(1, 1000)), 2000) // aleatório entre 1 e 1000, num intervalo de 2s.