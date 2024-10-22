const { slice } = require("lodash")

let nome = "Jesus"
console.log(nome.slice(0,1))
console.log(nome.slice(0,3))
console.log(nome.slice(0,5))

let vogal = 'abc'
console.log(vogal.slice(0,1))
console.log(vogal.slice(0,2))
console.log(vogal.slice(0,3))


/*Limitando caracteres

let tweet = prompt('Escreva aqui')
let limitadorDe150 = tweet.slice(0,150)

alert(limitadorDe150)

OU

alert(prompt('Escreva aqui).slice(0,150))
e taca o texto no prompt
sempre procure a parte lógica para depois refatorar o código e deixar ele menor...
*/