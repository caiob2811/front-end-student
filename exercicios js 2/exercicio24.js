/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas. */

function contarCaracteres(caractereContado, frase) {
   return[...frase].filter(caractere => caractere === caractereContado).length
}

console.log(contarCaracteres('a', 'Ana'))
console.log(contarCaracteres('b', 'Banana'))
console.log(contarCaracteres('c', 'Caraca'))
console.log(contarCaracteres("r", "A sorte favorece os audazes"))