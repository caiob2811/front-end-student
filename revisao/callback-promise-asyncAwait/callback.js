const fs = require('fs')

console.log(1)

function callback(err, content){ 
    console.log(String(content))
}; 

fs.readFile('msg1.txt', (err, content) => { // requisito assincrono lê o código, espera a retorno, não bloqueia a execução, continua e quando voltar ele te entrega o procedimento 
                                            //ou seja o Jesus te ama vai vir só na linha 4 do console.log.
fs.readFile('msg2.txt', (err2, content2) => {
    console.log(String(content))
    console.log(String(content2))
    })
}) 

console.log(2)
console.log(3)

/* callback nos da um retorno 
Vai executar o seu código, vai guardar o callback num quadro de memória e vai esperar que esse processo todo aconteça e dps retorna, 
ou seja espera que ele te de um retorno
*/



