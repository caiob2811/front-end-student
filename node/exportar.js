console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // as maneiras de ter o valor exports e exportar
exports.b = 2 // as maneiras de ter o valor exports e exportar
module.exports.c = 3 // as maneiras de ter o valor exports e exportar

exports = null // não vai ser retornado, porque é o exports

console.log(module.exports)

exports = { // não vai ser retornado, porque porque é o exports
    nome:'Erick',
    idade: 24
}

console.log(module.exports) // o que é retornado é module.exports

module.exports = {publico: true} // toda vez que precisar atribuir um novo objeto para ser exportado deve usar o module.exports
// se quiser o objeto que veio criado desde o início (linha 1) use this.a, etc...