const fs = require('fs')

console.log(1)

const readFile = file => new Promise((resolve , reject) => { //recebe 2 params, resolver ou rejeitar
    fs.readFile(file, (err, content) => {
        if(err) {
            reject(err) //caso der erro, retorne imediatamente erro
        } else {
            resolve(content) // entrega a leitura do arquivo, retorne imediatamente o arquivo
        }
    })
})

 readFile('msg1.txt').then(content => {
    console.log(String(content))

    return readFile('msg2.txt').then(content => {
        console.log(String(content))
    })
})

const statusPromises = readFile ('msg1.txt')
console.log(statusPromises) // Promise { <pending> } a chamada ficou pendente porque não dei o then, logo não conseguiu resolver a promise
/*readFile('msg1.txt').then(content => {
    console.log(String(content))

    return readFile('msg2.txt').then(content => {
        console.log(String(content))
    })
}) */

console.log(2)
console.log(3)

/*Comparação com callback

fs.readFile('msg1.txt', (err, content) => { 
fs.readFile('msg2.txt', (err2, content2) => {
    console.log(String(content))
    console.log(String(content2))
    })
}) 

Callback: vai esperar o retorno, vai devolver dps de ter concluído x Promise: retorno imediato

Promise da um retorno imediato
Da um promessa imediata, te promete que vai te entregar um resultado agora aprovar ou rejeitar, sem esperar igual o callback
Mais performático o código

*/ 