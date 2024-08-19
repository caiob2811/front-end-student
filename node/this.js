console.log(this === global) // this fora de uma função não aponta para a global
console.log(this === module)

console.log(this === module.exports) // this fora de uma função aponta para module.exports
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // this dentro de uma função não aponta para exports
    console.log(this === module.exports) // this dentro de uma função não aponta para module.exports
    console.log(this === global) // this dentro de uma função aponta para a global
    this.perigo = '...' // o this dentro de uma função você acessa a variável global
}

this.perigo = '...' // o this fora de uma função, você está acessando module.exports, ou seja está transformando o atributo ou função em algo público, visível fora do módulo
logThis()

// já com arrow function => this não aponta para a global, e sim para module.exports