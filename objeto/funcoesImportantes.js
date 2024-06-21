const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 59
}

console.log(Object.keys(pessoa)) // te da os nomes dos atributos
console.log(Object.values(pessoa)) // te fala os valores do objeto
console.log(Object.entries(pessoa)) // retorna uma matriz dos pares chave/valor de um objeto e O método Object.entries() não altera o objeto original.

Object.entries(pessoa).forEach(([chave, valor]) => { // mesma coisa so que sem sub-arrays porque você desestrutura o array
    console.log(`${chave}: ${valor}`)

})

Object.defineProperty(pessoa, 'dataNascimento', {  // define a proprieda entre(é o alvo que você quer criar)
    enumerable: true, // vai ser listado, enumerado []?
    writable: false, // pode ser alterado?
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // último valor vai ser sobrescrito
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)

Object.is() //O método é usado para comparar se dois valores são iguais.

Object.is() //retorna se os valores forem iguais e caso contrário. Ele difere do operador de igualdade estrita no tratamento 
//de NaN e zero positivo/negativo.truefalse===

Syntax:

Object.is(value1, value2)