const fs = require('fs')

console.log(1)

const readFile = file => new Promise((resolve , reject) => { //recebe 2 params, resolver ou rejeitar
    fs.readFile(file, (err, content) => {
        if(err) {
            reject(err) //caso der erro, retorne imediatamente erro
        } else {
            resolve(content) // entregar a leitura do arquivo, retorne imediatamente o arquivo
        }
    })
})

const init = async () => { // no final lê esse
    /*
    Se der erro? 
    Continua a execução 

    try {
        const content = await readFile('msg123.txt') e mostra qual foi o erro
        console.log(String(content))

        const content2 = await readFile('msg2.txt')
        console.log(String(content2))   
    } catch (err) {
        console.log(err) 
    }
} */
    const content = await readFile('msg1.txt') 
    console.log(String(content))

    const content2 = await readFile('msg2.txt')
    console.log(String(content2))
} 

console.log(init()) //Promise {<pending>}

init().then(content => { // assim não mostra mais o Promise {<pending>}
    console.log(content)
})

console.log(2)
console.log(3)


/*const initt = async () => {
    console.log(initt()) // Promise undefined porque não defini nada
} 


/*
Async await: abstrai uma coisa complexa para torna-lá fácil (enxuga) para que ficque visualmente melhor para manuntenção
é uma promise
*/

