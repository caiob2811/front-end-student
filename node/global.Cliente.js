require ('./global') // o global vai ficar visivel a aplicação inteira

console.log(app.saudacao())

app.nome = 'Eita!' // assim muda o valor, porém usando object.freeze ele deixa o valor criado anteriormente (linha 7)
console.log(app.nome)

